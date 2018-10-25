import Matrix3x3 from "./Matrix3x3.js";

export default class Matrix4x4 {
	constructor(
		m00, m01, m02, m03,
		m10, m11, m12, m13,
		m20, m21, m22, m23,
		m30, m31, m32, m33
	)
	{
		this[0] = new Float32Array([m00, m01, m02, m03]);
		this[1] = new Float32Array([m10, m11, m12, m13]);
		this[2] = new Float32Array([m20, m21, m22, m23]);
		this[3] = new Float32Array([m30, m31, m32, m33]);
	}

	clone()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		return new Matrix4x4(
			r0[0], r0[1], r0[2], r0[3],
			r1[0], r1[1], r1[2], r1[3],
			r2[0], r2[1], r2[2], r2[3],
			r3[0], r3[1], r3[2], r3[3]
		);
	}

	view(transpose)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		if(transpose)
		{
			return new Float32Array([
				r0[0], r1[0], r2[0], r3[0],
				r0[1], r1[1], r2[1], r3[1],
				r0[2], r1[2], r2[2], r3[2],
				r0[3], r1[3], r2[3], r3[3]
			]);
		}
		else
		{
			return new Float32Array([
				r0[0], r0[1], r0[2], r0[3],
				r1[0], r1[1], r1[2], r1[3],
				r2[0], r2[1], r2[2], r2[3],
				r3[0], r3[1], r3[2], r3[3]
			]);
		}
	}

	transpose()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		return new Matrix4x4(
			r0[0], r1[0], r2[0], r3[0],
			r0[1], r1[1], r2[1], r3[1],
			r0[2], r1[2], r2[2], r3[2],
			r0[3], r1[3], r2[3], r3[3]
		);
	}

	add(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];
		const s3 = m[3];

		return new Matrix4x4(
			r0[0] + s0[0], r0[1] + s0[1], r0[2] + s0[2], r0[3] + s0[3],
			r1[0] + s1[0], r1[1] + s1[1], r1[2] + s1[2], r1[3] + s1[3],
			r2[0] + s2[0], r2[1] + s2[1], r2[2] + s2[2], r2[3] + s2[3],
			r3[0] + s3[0], r3[1] + s3[1], r3[2] + s3[2], r3[3] + s3[3]
		);
	}

	add_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];
		const s3 = m[3];

		r0[0] += s0[0];
		r0[1] += s0[1];
		r0[2] += s0[2];
		r0[3] += s0[3];

		r1[0] += s1[0];
		r1[1] += s1[1];
		r1[2] += s1[2];
		r1[3] += s1[3];

		r2[0] += s2[0];
		r2[1] += s2[1];
		r2[2] += s2[2];
		r2[3] += s2[3];

		r3[0] += s3[0];
		r3[1] += s3[1];
		r3[2] += s3[2];
		r3[3] += s3[3];

		return this;
	}

	sub(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];
		const s3 = m[3];

		return new Matrix4x4(
			r0[0] - s0[0], r0[1] - s0[1], r0[2] - s0[2], r0[3] - s0[3],
			r1[0] - s1[0], r1[1] - s1[1], r1[2] - s1[2], r1[3] - s1[3],
			r2[0] - s2[0], r2[1] - s2[1], r2[2] - s2[2], r2[3] - s2[3],
			r3[0] - s3[0], r3[1] - s3[1], r3[2] - s3[2], r3[3] - s3[3]
		);
	}

	sub_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];
		const s3 = m[3];

		r0[0] -= s0[0];
		r0[1] -= s0[1];
		r0[2] -= s0[2];
		r0[3] -= s0[3];

		r1[0] -= s1[0];
		r1[1] -= s1[1];
		r1[2] -= s1[2];
		r1[3] -= s1[3];

		r2[0] -= s2[0];
		r2[1] -= s2[1];
		r2[2] -= s2[2];
		r2[3] -= s2[3];

		r3[0] -= s3[0];
		r3[1] -= s3[1];
		r3[2] -= s3[2];
		r3[3] -= s3[3];

		return this;
	}

	scale(s)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		return new Matrix4x4(
			r0[0] * s, r0[1] * s, r0[2] * s, r0[3] * s,
			r1[0] * s, r1[1] * s, r1[2] * s, r1[3] * s,
			r2[0] * s, r2[1] * s, r2[2] * s, r2[3] * s,
			r3[0] * s, r3[1] * s, r3[2] * s, r3[3] * s
		);
	}

	scale_assign(s)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		r0[0] *= s;
		r0[1] *= s;
		r0[2] *= s;
		r0[3] *= s;

		r1[0] *= s;
		r1[1] *= s;
		r1[2] *= s;
		r1[3] *= s;

		r2[0] *= s;
		r2[1] *= s;
		r2[2] *= s;
		r2[3] *= s;

		r3[0] *= s;
		r3[1] *= s;
		r3[2] *= s;
		r3[3] *= s;

		return this;
	}

	mul(m)
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const s0 = m[0];
		const s1 = m[1];
		const s2 = m[2];
		const s3 = m[3];

		return new Matrix4x4(
			r0[0] * s0[0] + r0[1] * s1[0] + r0[2] * s2[0] + r0[3] * s3[0],
			r0[0] * s0[1] + r0[1] * s1[1] + r0[2] * s2[1] + r0[3] * s3[1],
			r0[0] * s0[2] + r0[1] * s1[2] + r0[2] * s2[2] + r0[3] * s3[2],
			r0[0] * s0[3] + r0[1] * s1[3] + r0[2] * s2[3] + r0[3] * s3[3],

			r1[0] * s0[0] + r1[1] * s1[0] + r1[2] * s2[0] + r1[3] * s3[0],
			r1[0] * s0[1] + r1[1] * s1[1] + r1[2] * s2[1] + r1[3] * s3[1],
			r1[0] * s0[2] + r1[1] * s1[2] + r1[2] * s2[2] + r1[3] * s3[2],
			r1[0] * s0[3] + r1[1] * s1[3] + r1[2] * s2[3] + r1[3] * s3[3],

			r2[0] * s0[0] + r2[1] * s1[0] + r2[2] * s2[0] + r2[3] * s3[0],
			r2[0] * s0[1] + r2[1] * s1[1] + r2[2] * s2[1] + r2[3] * s3[1],
			r2[0] * s0[2] + r2[1] * s1[2] + r2[2] * s2[2] + r2[3] * s3[2],
			r2[0] * s0[3] + r2[1] * s1[3] + r2[2] * s2[3] + r2[3] * s3[3],

			r3[0] * s0[0] + r3[1] * s1[0] + r3[2] * s2[0] + r3[3] * s3[0],
			r3[0] * s0[1] + r3[1] * s1[1] + r3[2] * s2[1] + r3[3] * s3[1],
			r3[0] * s0[2] + r3[1] * s1[2] + r3[2] * s2[2] + r3[3] * s3[2],
			r3[0] * s0[3] + r3[1] * s1[3] + r3[2] * s2[3] + r3[3] * s3[3]
		);
	}

	determinant()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const d00 = (new Matrix3x3(
			r1[1], r1[2], r1[3],
			r2[1], r2[2], r2[3],
			r3[1], r3[2], r3[3]
		)).determinant();
		const d01 = (new Matrix3x3(
			r1[0], r1[2], r1[3],
			r2[0], r2[2], r2[3],
			r3[0], r3[2], r3[3]
		)).determinant();
		const d02 = (new Matrix3x3(
			r1[0], r1[1], r1[3],
			r2[0], r2[1], r2[3],
			r3[0], r3[1], r3[3]
		)).determinant();
		const d03 = (new Matrix3x3(
			r1[0], r1[1], r1[2],
			r2[0], r2[1], r2[2],
			r3[0], r3[1], r3[2]
		)).determinant();

		return r0[0] * d00 - r0[1] * d01 + r0[2] * d02 - r0[3] * d03;
	}

	inverse()
	{
		const r0 = this[0];
		const r1 = this[1];
		const r2 = this[2];
		const r3 = this[3];

		const d00 = (new Matrix3x3(
			r1[1], r1[2], r1[3],
			r2[1], r2[2], r2[3],
			r3[1], r3[2], r3[3]
		)).determinant();
		const d01 = (new Matrix3x3(
			r1[0], r1[2], r1[3],
			r2[0], r2[2], r2[3],
			r3[0], r3[2], r3[3]
		)).determinant();
		const d02 = (new Matrix3x3(
			r1[0], r1[1], r1[3],
			r2[0], r2[1], r2[3],
			r3[0], r3[1], r3[3]
		)).determinant();
		const d03 = (new Matrix3x3(
			r1[0], r1[1], r1[2],
			r2[0], r2[1], r2[2],
			r3[0], r3[1], r3[2]
		)).determinant();

		const d10 = (new Matrix3x3(
			r0[1], r0[2], r0[3],
			r2[1], r2[2], r2[3],
			r3[1], r3[2], r3[3]
		)).determinant();
		const d11 = (new Matrix3x3(
			r0[0], r0[2], r0[3],
			r2[0], r2[2], r2[3],
			r3[0], r3[2], r3[3]
		)).determinant();
		const d12 = (new Matrix3x3(
			r0[0], r0[1], r0[3],
			r2[0], r2[1], r2[3],
			r3[0], r3[1], r3[3]
		)).determinant();
		const d13 = (new Matrix3x3(
			r0[0], r0[1], r0[2],
			r2[0], r2[1], r2[2],
			r3[0], r3[1], r3[2]
		)).determinant();

		const d20 = (new Matrix3x3(
			r0[1], r0[2], r0[3],
			r1[1], r1[2], r1[3],
			r3[1], r3[2], r3[3]
		)).determinant();
		const d21 = (new Matrix3x3(
			r0[0], r0[2], r0[3],
			r1[0], r1[2], r1[3],
			r3[0], r3[2], r3[3]
		)).determinant();
		const d22 = (new Matrix3x3(
			r0[0], r0[1], r0[3],
			r1[0], r1[1], r1[3],
			r3[0], r3[1], r3[3]
		)).determinant();
		const d23 = (new Matrix3x3(
			r0[0], r0[1], r0[2],
			r1[0], r1[1], r1[2],
			r3[0], r3[1], r3[2]
		)).determinant();

		const d30 = (new Matrix3x3(
			r0[1], r0[2], r0[3],
			r1[1], r1[2], r1[3],
			r2[1], r2[2], r2[3]
		)).determinant();
		const d31 = (new Matrix3x3(
			r0[0], r0[2], r0[3],
			r1[0], r1[2], r1[3],
			r2[0], r2[2], r2[3]
		)).determinant();
		const d32 = (new Matrix3x3(
			r0[0], r0[1], r0[3],
			r1[0], r1[1], r1[3],
			r2[0], r2[1], r2[3]
		)).determinant();
		const d33 = (new Matrix3x3(
			r0[0], r0[1], r0[2],
			r1[0], r1[1], r1[2],
			r2[0], r2[1], r2[2]
		)).determinant();

		const rd = 1.0 / (r0[0] * d00 - r0[1] * d01 + r0[2] * d02 - r0[3] * d03);

		return new Matrix4x4(
			d00 * rd, -d10 * rd, d20 * rd, -d30 * rd,
			-d01 * rd, d11 * rd, -d21 * rd, d31 * rd,
			d02 * rd, -d12 * rd, d22 * rd, -d32 * rd,
			-d03 * rd, d13 * rd, -d23 * rd, d33 * rd
		);
	}
}
