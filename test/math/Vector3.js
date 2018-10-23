import Vector3 from "../../src/math/Vector3.js";
const expect = chai.expect;

describe("Vector3", function(){
	const delta = 0.0001;

	describe("コンストラクタ", function(){
		context("実引数無し", function(){
			it("全ての要素が0", function(){
				const v = new Vector3();
				expect(v.x).to.equal(0.0);
				expect(v.y).to.equal(0.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が1つ", function(){
			it("x以外0", function(){
				const v = new Vector3(1.0);
				expect(v.x).to.equal(1.0);
				expect(v.y).to.equal(0.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が2つ", function(){
			it("zが0", function(){
				const v = new Vector3(1.0, 2.0);
				expect(v.x).to.equal(1.0);
				expect(v.y).to.equal(2.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が3つ", function(){
			it("x, y, zが指定した値", function(){
				const v = new Vector3(1.0, 2.0, 3.0);
				expect(v.x).to.equal(1.0);
				expect(v.y).to.equal(2.0);
				expect(v.z).to.equal(3.0);
			});
		});
	});

	describe(".Value", function(){
		it("全ての値が等しい", function(){
			const v = Vector3.Value(1.0);
			expect(v.x).to.equal(v.y);
			expect(v.y).to.equal(v.z);
			expect(v.z).to.equal(1.0);
		});
	});

	describe("#clone", function(){
		it("値は同じだが別のオブジェクト", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = a.clone();
			expect(a.x).to.equal(b.x);
			expect(a.y).to.equal(b.y);
			expect(a.z).to.equal(b.z);
			expect(a).to.not.equal(b);
		});
	});

	describe("#view", function(){
		it("値は同じだが型はFloat32Array", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = a.view();
			expect(b).is.a("Float32Array");
			expect(a.x).to.equal(b[0]);
			expect(a.y).to.equal(b[1]);
			expect(a.z).to.equal(b[2]);
		});
	});

	describe("#set", function(){
		context("実引数無し", function(){
			it("全ての要素が0", function(){
				const v = new Vector3(1.0, 2.0, 3.0);
				v.set();
				expect(v.x).to.equal(0.0);
				expect(v.y).to.equal(0.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が1つ", function(){
			it("x以外0", function(){
				const v = new Vector3(1.0, 2.0, 3.0);
				v.set(4.0);
				expect(v.x).to.equal(4.0);
				expect(v.y).to.equal(0.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が2つ", function(){
			it("zが0", function(){
				const v = new Vector3(1.0, 2.0, 3.0);
				v.set(4.0, 5.0);
				expect(v.x).to.equal(4.0);
				expect(v.y).to.equal(5.0);
				expect(v.z).to.equal(0.0);
			});
		});

		context("実引数が3つ", function(){
			it("x, y, zが指定した値", function(){
				const v = new Vector3(1.0, 2.0, 3.0);
				v.set(4.0, 5.0, 6.0);
				expect(v.x).to.equal(4.0);
				expect(v.y).to.equal(5.0);
				expect(v.z).to.equal(6.0);
			});
		});
	});

	describe("#add", function(){
		it("結果のオブジェクトの値は各要素の和で，どのオブジェクトとも異なる．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.add(b);
			expect(c).to.not.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(a.x + b.x);
			expect(c.y).to.equal(a.y + b.y);
			expect(c.z).to.equal(a.z + b.z);
		});
	});

	describe("#add_assign", function(){
		it("結果のオブジェクトの値は各要素の和で，左側のオブジェクトである．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.add_assign(b);

			expect(c).to.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(1.0 + b.x);
			expect(c.y).to.equal(2.0 + b.y);
			expect(c.z).to.equal(3.0 + b.z);
		});
	});

	describe("#sub", function(){
		it("結果のオブジェクトの値は各要素の差で，どのオブジェクトとも異なる．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.sub(b);
			expect(c).to.not.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(a.x - b.x);
			expect(c.y).to.equal(a.y - b.y);
			expect(c.z).to.equal(a.z - b.z);
		});
	});

	describe("#sub_assign", function(){
		it("結果のオブジェクトの値は各要素の差で，左側のオブジェクトである．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.sub_assign(b);

			expect(c).to.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(1.0 - b.x);
			expect(c.y).to.equal(2.0 - b.y);
			expect(c.z).to.equal(3.0 - b.z);
		});
	});

	describe("#mul", function(){
		it("結果のオブジェクトの値は各要素の積で，どのオブジェクトとも異なる．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.mul(b);
			expect(c).to.not.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(a.x * b.x);
			expect(c.y).to.equal(a.y * b.y);
			expect(c.z).to.equal(a.z * b.z);
		});
	});

	describe("#mul_assign", function(){
		it("結果のオブジェクトの値は各要素の積で，左側のオブジェクトである．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.mul_assign(b);

			expect(c).to.equal(a);
			expect(c).to.not.equal(b);
			expect(c.x).to.equal(1.0 * b.x);
			expect(c.y).to.equal(2.0 * b.y);
			expect(c.z).to.equal(3.0 * b.z);
		});
	});

	describe("#scale", function(){
		it("結果のオブジェクトの値は各要素の値をスカラー倍した値で，どのオブジェクトとも異なる．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = a.scale(4.0);

			expect(b).to.not.equal(a);
			expect(b.x).to.equal(1.0 * 4.0);
			expect(b.y).to.equal(2.0 * 4.0);
			expect(b.z).to.equal(3.0 * 4.0);
		});
	});

	describe("#scale_assign", function(){
		it("結果のオブジェクトの値は各要素の値をスカラー倍した値で，左側のオブジェクトである．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = a.scale_assign(4.0);

			expect(b).to.equal(a);
			expect(b.x).to.equal(1.0 * 4.0);
			expect(b.y).to.equal(2.0 * 4.0);
			expect(b.z).to.equal(3.0 * 4.0);
		});
	});

	describe("#dot", function(){
		it("内積を返す．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);

			expect(a.dot(b)).closeTo(a.x * b.x + a.y * b.y + a.z * b.z, delta);
		});
	});

	describe("#length", function(){
		it("長さを返す．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			expect(a.length()).closeTo(Math.sqrt(a.dot(a)), delta);
		});
	});

	describe("#unit", function(){
		it("単位ベクトルを返す．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const u = a.unit();

			expect(u.length()).closeTo(1.0, delta);
			expect(a.dot(u)).closeTo(a.length(), delta);
			expect(u.dot(a)).closeTo(a.length(), delta);
		});
	});

	describe("#cross", function(){
		it("外積を返す．", function(){
			const a = new Vector3(1.0, 2.0, 3.0);
			const b = new Vector3(4.0, 5.0, 6.0);
			const c = a.cross(b);

			expect(a.dot(c)).closeTo(0.0, delta);
			expect(b.dot(c)).closeTo(0.0, delta);
		});
	});
});
