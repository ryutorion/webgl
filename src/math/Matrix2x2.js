export default class Matrix2x2 {
	constructor(
		m00, m01,
		m10, m11
	)
	{
		this[0] = new Float32Array([m00, m01]);
		this[1] = new Float32Array([m10, m11]);
	}

	clone()
	{
		const r0 = this[0];
		const r1 = this[1];

		return new Matrix2x2(
			r0[0], r0[1],
			r1[0], r1[1]
		);
	}

	view(transpose)
	{
		const r0 = this[0];
		const r1 = this[1];

		if(transpose)
		{
			return new Float32Array([
				r0[0], r1[0],
				r0[1], r1[1]
			]);
		}
		else
		{
			return new Float32Array([
				r0[0], r0[1],
				r1[0], r1[1]
			]);
		}
	}

	transpose()
	{
		const r0 = this[0];
		const r1 = this[1];

		return new Matrix2x2(
			r0[0], r1[0],
			r0[1], r1[1]
		);
	}

	add(m)
	{
		const r0 = this[0];
		const r1 = this[1];

		const s0 = m[0];
		const s1 = m[1];

		return new Matrix2x2(
			r0[0] + s0[0], r0[1] + s0[1],
			r1[0] + s1[0], r1[1] + s1[1]
		);
	}

	add_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];

		const s0 = m[0];
		const s1 = m[1];

		r0[0] += s0[0];
		r0[1] += s0[1];

		r1[0] += s1[0];
		r1[1] += s1[1];

		return this;
	}

	sub(m)
	{
		const r0 = this[0];
		const r1 = this[1];

		const s0 = m[0];
		const s1 = m[1];

		return new Matrix2x2(
			r0[0] - s0[0], r0[1] - s0[1],
			r1[0] - s1[0], r1[1] - s1[1]
		);
	}

	sub_assign(m)
	{
		const r0 = this[0];
		const r1 = this[1];

		const s0 = m[0];
		const s1 = m[1];

		r0[0] -= s0[0];
		r0[1] -= s0[1];

		r1[0] -= s1[0];
		r1[1] -= s1[1];

		return this;
	}

	scale(s)
	{
		const r0 = this[0];
		const r1 = this[1];

		return new Matrix2x2(
			r0[0] * s, r0[1] * s,
			r1[0] * s, r1[1] * s
		);
	}

	scale_assign(s)
	{
		const r0 = this[0];
		const r1 = this[1];

		r0[0] *= s;
		r0[1] *= s;

		r1[0] *= s;
		r1[1] *= s;

		return this;
	}

	mul(m)
	{
		const r0 = this[0];
		const r1 = this[1];

		const s0 = m[0];
		const s1 = m[1];

		return new Matrix2x2(
			r0[0] * s0[0] + r0[1] * s1[0],
			r0[0] * s0[1] + r0[1] * s1[1],

			r1[0] * s0[0] + r1[1] * s1[0],
			r1[0] * s0[1] + r1[1] * s1[1]
		);
	}

	determinant()
	{
		const r0 = this[0];
		const r1 = this[1];

		return r0[0] * r1[1] - r0[1] * r1[0];
	}

	inverse()
	{
		const r0 = this[0];
		const r1 = this[1];

		const rd = 1.0 / this.determinant();

		return new Matrix2x2(
			r1[1] * rd, -r0[1] * rd,
			-r1[0] * rd, r0[0] * rd
		);
	}
}
