import Matrix2x2 from "../../src/math/Matrix2x2.js";
const expect = chai.expect;

describe("Matrix2x2", function(){
	const delta = 0.0001;

	describe("コンストラクタ", function(){
		it("指定された値で初期化されている", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);

			expect(m[0]).is.a('Float32Array');
			expect(m[1]).is.a('Float32Array');
			expect(m[0][0]).to.equal(2.0);
			expect(m[0][1]).to.equal(3.0);
			expect(m[1][0]).to.equal(5.0);
			expect(m[1][1]).to.equal(7.0);
		});
	});

	describe("#clone", function(){
		it("値は同じで別のオブジェクトである", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = m.clone();

			expect(n).to.be.an.instanceof(Matrix2x2);
			expect(n[0]).to.be.a("Float32Array");
			expect(n[1]).to.be.a("Float32Array");

			expect(n).to.not.equal(m);

			expect(n[0]).to.not.equal(m[0]);
			expect(n[1]).to.not.equal(m[1]);

			expect(n[0][0]).to.equal(m[0][0]);
			expect(n[0][1]).to.equal(m[0][1]);
			expect(n[1][0]).to.equal(m[1][0]);
			expect(n[1][1]).to.equal(m[1][1]);
		});
	});

	describe("#view", function(){
		context("実引数が無い場合", function(){
			it("値は同じでrow-majorでFloat32Arrayに入っている．", function(){
				const m = new Matrix2x2(
					2.0, 3.0,
					5.0, 7.0
				);
				const v = m.view();

				expect(v).to.be.a("Float32Array");
				expect(v[0]).to.equal(m[0][0]);
				expect(v[1]).to.equal(m[0][1]);
				expect(v[2]).to.equal(m[1][0]);
				expect(v[3]).to.equal(m[1][1]);
			});
		});

		context("実引数が有る場合", function(){
			it("値は同じでcolumn-majorでFloat32Arrayに入っている．", function(){
				const m = new Matrix2x2(
					2.0, 3.0,
					5.0, 7.0
				);
				const v = m.view(true);

				expect(v).to.be.a("Float32Array");
				expect(v[0]).to.equal(m[0][0]);
				expect(v[1]).to.equal(m[1][0]);
				expect(v[2]).to.equal(m[0][1]);
				expect(v[3]).to.equal(m[1][1]);
			});
		});
	});

	describe("#transpose", function(){
		it("行と列が入れ替わっており，別のオブジェクトである．", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = m.transpose();

			expect(n).to.be.an.instanceof(Matrix2x2);
			expect(n[0]).to.be.a("Float32Array");
			expect(n[1]).to.be.a("Float32Array");

			expect(n).to.not.equal(m);

			expect(n[0][0]).to.equal(m[0][0]);
			expect(n[0][1]).to.equal(m[1][0]);
			expect(n[1][0]).to.equal(m[0][1]);
			expect(n[1][1]).to.equal(m[1][1]);
		});
	});

	describe("#add", function(){
		it("行列の加算で異なるオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = new Matrix2x2(
				9.0, 11.0,
				13.0, 17.0
			);
			const o = m.add(n);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.not.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(m[0][0] + n[0][0]);
			expect(o[0][1]).to.equal(m[0][1] + n[0][1]);
			expect(o[1][0]).to.equal(m[1][0] + n[1][0]);
			expect(o[1][1]).to.equal(m[1][1] + n[1][1]);
		});
	});

	describe("#add_assign", function(){
		it("行列の加算で左側と同じオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = new Matrix2x2(
				9.0, 11.0,
				13.0, 17.0
			);
			const o = m.add_assign(n);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(2.0 + n[0][0]);
			expect(o[0][1]).to.equal(3.0 + n[0][1]);
			expect(o[1][0]).to.equal(5.0 + n[1][0]);
			expect(o[1][1]).to.equal(7.0 + n[1][1]);
		});
	});

	describe("#sub", function(){
		it("行列の減算で異なるオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = new Matrix2x2(
				9.0, 11.0,
				13.0, 17.0
			);
			const o = m.sub(n);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.not.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(m[0][0] - n[0][0]);
			expect(o[0][1]).to.equal(m[0][1] - n[0][1]);
			expect(o[1][0]).to.equal(m[1][0] - n[1][0]);
			expect(o[1][1]).to.equal(m[1][1] - n[1][1]);
		});
	});

	describe("#sub_assign", function(){
		it("行列の減算で左側と同じオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = new Matrix2x2(
				9.0, 11.0,
				13.0, 17.0
			);
			const o = m.sub_assign(n);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(2.0 - n[0][0]);
			expect(o[0][1]).to.equal(3.0 - n[0][1]);
			expect(o[1][0]).to.equal(5.0 - n[1][0]);
			expect(o[1][1]).to.equal(7.0 - n[1][1]);
		});
	});

	describe("#scale", function(){
		it("行列のスカラー乗算で異なるオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const o = m.scale(9.0);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.not.equal(m);

			expect(o[0][0]).to.equal(m[0][0] * 9.0);
			expect(o[0][1]).to.equal(m[0][1] * 9.0);
			expect(o[1][0]).to.equal(m[1][0] * 9.0);
			expect(o[1][1]).to.equal(m[1][1] * 9.0);
		});
	});

	describe("#scale_assign", function(){
		it("行列のスカラー乗算で左側と同じオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const o = m.scale_assign(9.0);

			expect(o).to.be.an.instanceof(Matrix2x2);
			expect(o).to.equal(m);

			expect(o[0][0]).to.equal(2.0 * 9.0);
			expect(o[0][1]).to.equal(3.0 * 9.0);
			expect(o[1][0]).to.equal(5.0 * 9.0);
			expect(o[1][1]).to.equal(7.0 * 9.0);
		});
	});

	describe("#mul", function(){
		it("行列の乗算で異なるオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = new Matrix2x2(
				9.0, 11.0,
				13.0, 17.0
			);
			const mn = m.mul(n);

			expect(mn).to.be.an.instanceof(Matrix2x2);
			expect(mn).to.not.equal(m);
			expect(mn).to.not.equal(n);

			expect(mn[0][0]).to.equal(2.0 * 9.0 + 3.0 * 13.0);
			expect(mn[0][1]).to.equal(2.0 * 11.0 + 3.0 * 17.0);
			expect(mn[1][0]).to.equal(5.0 * 9.0 + 7.0 * 13.0);
			expect(mn[1][1]).to.equal(5.0 * 11.0 + 7.0 * 17.0);
		});
	});

	describe("#determinant", function(){
		it("2次正方行列の行列式", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const d = m.determinant();

			expect(d).to.equal(2.0 * 7.0 - 3.0 * 5.0);
		});
	});

	describe("#inverse", function(){
		it("逆行列で異なるオブジェクト", function(){
			const m = new Matrix2x2(
				2.0, 3.0,
				5.0, 7.0
			);
			const n = m.inverse();
			const mn = m.mul(n);
			const nm = n.mul(m);

			expect(n).to.be.an.instanceof(Matrix2x2);
			expect(mn[0][0]).is.closeTo(1.0, delta);
			expect(mn[0][1]).is.closeTo(0.0, delta);
			expect(mn[1][0]).is.closeTo(0.0, delta);
			expect(mn[1][1]).is.closeTo(1.0, delta);

			expect(nm[0][0]).is.closeTo(1.0, delta);
			expect(nm[0][1]).is.closeTo(0.0, delta);
			expect(nm[1][0]).is.closeTo(0.0, delta);
			expect(nm[1][1]).is.closeTo(1.0, delta);
		});
	});
});
