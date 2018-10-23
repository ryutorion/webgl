export default class Vector3 {
	constructor(x, y, z)
	{
		this.x = x || 0.0;
		this.y = y || 0.0;
		this.z = z || 0.0;
	}

	static Value(v)
	{
		return new Vector3(v, v, v);
	}

	clone()
	{
		return new Vector3(this.x, this.y, this.z);
	}

	view()
	{
		return new Float32Array([this.x, this.y, this.z]);
	}

	set(x, y, z)
	{
		this.x = x || 0.0;
		this.y = y || 0.0;
		this.z = z || 0.0;
	}

	add(v)
	{
		return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
	}

	add_assign(v)
	{
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;
	}

	sub(v)
	{
		return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
	}

	sub_assign(v)
	{
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;
	}

	mul(v)
	{
		return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
	}

	mul_assign(v)
	{
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;
	}

	scale(s)
	{
		return new Vector3(this.x * s, this.y * s, this.z * s);
	}

	scale_assign(s)
	{
		this.x *= s;
		this.y *= s;
		this.z *= s;

		return this;
	}

	dot(v)
	{
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}

	length()
	{
		return Math.sqrt(this.dot(this));
	}

	unit()
	{
		return this.scale(1.0 / this.length());
	}

	cross(v)
	{
		return new Vector3(
			this.y * v.z - this.z * v.y,
			this.z * v.x - this.x * v.z,
			this.x * v.y - this.y * v.x
		);
	}
}
