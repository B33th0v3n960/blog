---
title: "Space Invaders"
pubDate: 2026-06-27
editDate: 2026-06-28
description: |
    Space Invaders built from scratch in Processing (Java), structured around an
    object-oriented scene system with five playable levels. Collision detection 
    is handled through a custom SAT implementation using linear algebra, while 
    alien movement follows elliptical paths driven by trigonometry. 
image:
  url: "/src/assets/cover-images/space-invaders.png"
  alt: "Screenshot of dashboard"
links:
    repo: "https://github.com/B33th0v3n960/space-invaders"
tags: ["project"]
---

---
> Repo Link: 
>
> [Github Repository](https://github.com/B33th0v3n960/space-invaders)

The most interesting this about this project is the underlying maths that
powered the collision detection. I used some linear algebra and trigonometry to
implementation collision with respect to rotation of the shape. 


## Vectors

Vectors are defined as a float array with some special methods from below.

| Method | Maths | Used for |
| --- | --- | --- |
| `dotProduct` | a · b = Σ aᵢbᵢ | every matrix row, and the projection below |
| `magnitude` | \|a\| = √(Σ aᵢ²) | turning an axis into a unit vector, circle distances |
| `scalarMul` | k · a, scaling each component | building projections, normalising axes |
| `projection` | projᵤ(v) = ((v · u) / \|u\|²) u | measuring how far a point lies along an axis |

Projection is the one that matters most. It answers “how far along this direction
is that point?”, and a collision test is built from exactly that question.
$$$
\operatorname{proj}_{\mathbf{u}}(\mathbf{v})=\frac{\mathbf{v}\cdot\mathbf{u}}{\lVert\mathbf{u}\rVert^{2}}\,\mathbf{u}

$$$

## Matrices
I chose to use homogeneous coordinates so that I can express each action with a
linear transformation rather than an affine transformation.

$$$
M=\begin{pmatrix}\cos\theta & -\sin\theta & x\\ \sin\theta & \cos\theta & y\\ 0 & 0 & 1\end{pmatrix} 
$$$

## Separatin Axis Theorem
SAT states that: “If two convex objects are not penetrating, there exists an axis
for which the projection of the objects will not overlap.”

In layman's term, my implementation of SAT projects each vertices of the shape
into the normal of each sides of the shape. For a circle this gets a bit
complicated and my implementation is a very hacky solution.
