import Matrix2x2 from "./Matrix2x2.js";

export default class Matrix3x3 {
	constructor(
		m00, m01, m02,
		m10, m11, m12,
		m20, m21, m22
	)
	{
		this[0] = new Float32Array([m00, m01, m02]);
		this[1] = new Float32Array([m10, m11, m12]);
		this[2] = new Float32Array([m20, m21, m22]);
	}

	clone()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		return new Matrix3x3(
			r0[0], r0[1], r0[2],
			r1[0], r1[1], r1[2],
			r2[0], r2[1], r2[2]
		);
	}

	view(transpose)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		if(transpose)
		{
			return new Float32Array([
				r0[0], r1[0], r2[0],
				r0[1], r1[1], r2[1],
				r0[2], r1[2], r2[2]
			]);
		}
		else
		{
			return new Float32Array([
				r0[0], r0[1], r0[2],
				r1[0], r1[1], r1[2],
				r2[0], r2[1], r2[2]
			]);
		}
	}

	transpose()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		return new Matrix3x3(
			r0[0], r1[0], r2[0],
			r0[1], r1[1], r2[1],
			r0[2], r1[2], r2[2]
		);
	}

	add(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];

		return new Matrix3x3(
			r0[0] + s0[0], r0[1] + s0[1], r0[2] + s0[2],
			r1[0] + s1[0], r1[1] + s1[1], r1[2] + s1[2],
			r2[0] + s2[0], r2[1] + s2[1], r2[2] + s2[2]
		);
	}

	add_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];

		r0[0] += s0[0];
		r0[1] += s0[1];
		r0[2] += s0[2];

		r1[0] += s1[0];
		r1[1] += s1[1];
		r1[2] += s1[2];

		r2[0] += s2[0];
		r2[1] += s2[1];
		r2[2] += s2[2];

		return this;
	}

	sub(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];

		return new Matrix3x3(
			r0[0] - s0[0], r0[1] - s0[1], r0[2] - s0[2],
			r1[0] - s1[0], r1[1] - s1[1], r1[2] - s1[2],
			r2[0] - s2[0], r2[1] - s2[1], r2[2] - s2[2]
		);
	}

	sub_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];

		r0[0] -= s0[0];
		r0[1] -= s0[1];
		r0[2] -= s0[2];

		r1[0] -= s1[0];
		r1[1] -= s1[1];
		r1[2] -= s1[2];

		r2[0] -= s2[0];
		r2[1] -= s2[1];
		r2[2] -= s2[2];

		return this;
	}

	scale(s)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		return new Matrix3x3(
			r0[0] * s, r0[1] * s, r0[2] * s,
			r1[0] * s, r1[1] * s, r1[2] * s,
			r2[0] * s, r2[1] * s, r2[2] * s
		);
	}

	scale_assign(s)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		r0[0] *= s;
		r0[1] *= s;
		r0[2] *= s;

		r1[0] *= s;
		r1[1] *= s;
		r1[2] *= s;

		r2[0] *= s;
		r2[1] *= s;
		r2[2] *= s;

		return this;
	}

	mul(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];

		return new Matrix3x3(
			r0[0] * s0[0] + r0[1] * s1[0] + r0[2] * s2[0],
			r0[0] * s0[1] + r0[1] * s1[1] + r0[2] * s2[1],
			r0[0] * s0[2] + r0[1] * s1[2] + r0[2] * s2[2],

			r1[0] * s0[0] + r1[1] * s1[0] + r1[2] * s2[0],
			r1[0] * s0[1] + r1[1] * s1[1] + r1[2] * s2[1],
			r1[0] * s0[2] + r1[1] * s1[2] + r1[2] * s2[2],

			r2[0] * s0[0] + r2[1] * s1[0] + r2[2] * s2[0],
			r2[0] * s0[1] + r2[1] * s1[1] + r2[2] * s2[1],
			r2[0] * s0[2] + r2[1] * s1[2] + r2[2] * s2[2]
		);
	}

	determinant()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const d00 = (new Matrix2x2(
			r1[1], r1[2],
			r2[1], r2[2]
		)).determinant();
		const d01 = (new Matrix2x2(
			r1[0], r1[2],
			r2[0], r2[2]
		)).determinant();
		const d02 = (new Matrix2x2(
			r1[0], r1[1],
			r2[0], r2[1]
		)).determinant();

		return r0[0] * d00 - r0[1] * d01 + r0[2] * d02;
	}

	inverse()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];

		const d00 = (new Matrix2x2(
			r1[1], r1[2],
			r2[1], r2[2]
		)).determinant();
		const d01 = (new Matrix2x2(
			r1[0], r1[2],
			r2[0], r2[2]
		)).determinant();
		const d02 = (new Matrix2x2(
			r1[0], r1[1],
			r2[0], r2[1]
		)).determinant();

		const d10 = (new Matrix2x2(
			r0[1], r0[2],
			r2[1], r2[2]
		)).determinant();
		const d11 = (new Matrix2x2(
			r0[0], r0[2],
			r2[0], r2[2]
		)).determinant();
		const d12 = (new Matrix2x2(
			r0[0], r0[1],
			r2[0], r2[1]
		)).determinant();

		const d20 = (new Matrix2x2(
			r0[1], r0[2],
			r1[1], r1[2]
		)).determinant();
		const d21 = (new Matrix2x2(
			r0[0], r0[2],
			r1[0], r1[2]
		)).determinant();
		const d22 = (new Matrix2x2(
			r0[0], r0[1],
			r1[0], r1[1]
		)).determinant();

		const rd = 1.0 / (r0[0] * d00 - r0[1] * d01 + r0[2] * d02);

		return new Matrix3x3(
			d00 * rd, -d10 * rd, d20 * rd,
			-d01 * rd, d11 * rd, -d21 * rd,
			d02 * rd, -d12 * rd, d22 * rd
		);
	}
}
