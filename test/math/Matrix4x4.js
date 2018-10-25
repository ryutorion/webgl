import Matrix4x4 from "../../src/math/Matrix4x4.js";
const expect = chai.expect;

describe("Matrix4x4", function(){
	const delta = 0.0001;

	describe("コンストラクタ", function(){
		it("指定された値で初期化されている", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);

			expect(m[0]).is.a('Float32Array');
			expect(m[1]).is.a('Float32Array');
			expect(m[2]).is.a('Float32Array');
			expect(m[3]).is.a('Float32Array');

			expect(m[0][0]).to.equal(2.0);
			expect(m[0][1]).to.equal(3.0);
			expect(m[0][2]).to.equal(5.0);
			expect(m[0][3]).to.equal(7.0);
			expect(m[1][0]).to.equal(11.0);
			expect(m[1][1]).to.equal(13.0);
			expect(m[1][2]).to.equal(17.0);
			expect(m[1][3]).to.equal(19.0);
			expect(m[2][0]).to.equal(23.0);
			expect(m[2][1]).to.equal(29.0);
			expect(m[2][2]).to.equal(31.0);
			expect(m[2][3]).to.equal(37.0);
			expect(m[3][0]).to.equal(41.0);
			expect(m[3][1]).to.equal(43.0);
			expect(m[3][2]).to.equal(47.0);
			expect(m[3][3]).to.equal(53.0);
		});
	});

	describe("#clone", function(){
		it("値は同じで別のオブジェクトである", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = m.clone();

			expect(n).to.be.an.instanceof(Matrix4x4);
			expect(n[0]).to.be.a("Float32Array");
			expect(n[1]).to.be.a("Float32Array");
			expect(n[2]).to.be.a("Float32Array");
			expect(n[3]).to.be.a("Float32Array");

			expect(n).to.not.equal(m);

			expect(n[0]).to.not.equal(m[0]);
			expect(n[1]).to.not.equal(m[1]);
			expect(n[2]).to.not.equal(m[2]);
			expect(n[3]).to.not.equal(m[3]);

			expect(n[0][0]).to.equal(m[0][0]);
			expect(n[0][1]).to.equal(m[0][1]);
			expect(n[0][2]).to.equal(m[0][2]);
			expect(n[0][3]).to.equal(m[0][3]);
			expect(n[1][0]).to.equal(m[1][0]);
			expect(n[1][1]).to.equal(m[1][1]);
			expect(n[1][2]).to.equal(m[1][2]);
			expect(n[1][3]).to.equal(m[1][3]);
			expect(n[2][0]).to.equal(m[2][0]);
			expect(n[2][1]).to.equal(m[2][1]);
			expect(n[2][2]).to.equal(m[2][2]);
			expect(n[2][3]).to.equal(m[2][3]);
			expect(n[3][0]).to.equal(m[3][0]);
			expect(n[3][1]).to.equal(m[3][1]);
			expect(n[3][2]).to.equal(m[3][2]);
			expect(n[3][3]).to.equal(m[3][3]);
		});
	});

	describe("#view", function(){
		context("実引数が無い場合", function(){
			it("値は同じでrow-majorでFloat32Arrayに入っている．", function(){
				const m = new Matrix4x4(
					2.0, 3.0, 5.0, 7.0,
					11.0, 13.0, 17.0, 19.0,
					23.0, 29.0, 31.0, 37.0,
					41.0, 43.0, 47.0, 53.0
				);
				const v = m.view();

				expect(v).to.be.a("Float32Array");
				expect(v[0]).to.equal(m[0][0]);
				expect(v[1]).to.equal(m[0][1]);
				expect(v[2]).to.equal(m[0][2]);
				expect(v[3]).to.equal(m[0][3]);
				expect(v[4]).to.equal(m[1][0]);
				expect(v[5]).to.equal(m[1][1]);
				expect(v[6]).to.equal(m[1][2]);
				expect(v[7]).to.equal(m[1][3]);
				expect(v[8]).to.equal(m[2][0]);
				expect(v[9]).to.equal(m[2][1]);
				expect(v[10]).to.equal(m[2][2]);
				expect(v[11]).to.equal(m[2][3]);
				expect(v[12]).to.equal(m[3][0]);
				expect(v[13]).to.equal(m[3][1]);
				expect(v[14]).to.equal(m[3][2]);
				expect(v[15]).to.equal(m[3][3]);
			});
		});

		context("実引数が有る場合", function(){
			it("値は同じでcolumn-majorでFloat32Arrayに入っている．", function(){
				const m = new Matrix4x4(
					2.0, 3.0, 5.0, 7.0,
					11.0, 13.0, 17.0, 19.0,
					23.0, 29.0, 31.0, 37.0,
					41.0, 43.0, 47.0, 53.0
				);
				const v = m.view(true);

				expect(v).to.be.a("Float32Array");
				expect(v[0]).to.equal(m[0][0]);
				expect(v[1]).to.equal(m[1][0]);
				expect(v[2]).to.equal(m[2][0]);
				expect(v[3]).to.equal(m[3][0]);
				expect(v[4]).to.equal(m[0][1]);
				expect(v[5]).to.equal(m[1][1]);
				expect(v[6]).to.equal(m[2][1]);
				expect(v[7]).to.equal(m[3][1]);
				expect(v[8]).to.equal(m[0][2]);
				expect(v[9]).to.equal(m[1][2]);
				expect(v[10]).to.equal(m[2][2]);
				expect(v[11]).to.equal(m[3][2]);
				expect(v[12]).to.equal(m[0][3]);
				expect(v[13]).to.equal(m[1][3]);
				expect(v[14]).to.equal(m[2][3]);
				expect(v[15]).to.equal(m[3][3]);
			});
		});
	});

	describe("#transpose", function(){
		it("行と列が入れ替わっており，別のオブジェクトである．", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = m.transpose();

			expect(n).to.be.an.instanceof(Matrix4x4);
			expect(n[0]).to.be.a("Float32Array");
			expect(n[1]).to.be.a("Float32Array");
			expect(n[2]).to.be.a("Float32Array");
			expect(n[3]).to.be.a("Float32Array");

			expect(n).to.not.equal(m);

			expect(n[0][0]).to.equal(m[0][0]);
			expect(n[0][1]).to.equal(m[1][0]);
			expect(n[0][2]).to.equal(m[2][0]);
			expect(n[0][3]).to.equal(m[3][0]);
			expect(n[1][0]).to.equal(m[0][1]);
			expect(n[1][1]).to.equal(m[1][1]);
			expect(n[1][2]).to.equal(m[2][1]);
			expect(n[1][3]).to.equal(m[3][1]);
			expect(n[2][0]).to.equal(m[0][2]);
			expect(n[2][1]).to.equal(m[1][2]);
			expect(n[2][2]).to.equal(m[2][2]);
			expect(n[2][3]).to.equal(m[3][2]);
			expect(n[3][0]).to.equal(m[0][3]);
			expect(n[3][1]).to.equal(m[1][3]);
			expect(n[3][2]).to.equal(m[2][3]);
			expect(n[3][3]).to.equal(m[3][3]);
		});
	});

	describe("#add", function(){
		it("行列の加算で異なるオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = new Matrix4x4(
				59.0, 61.0, 67.0, 71.0,
				73.0, 79.0, 83.0, 89.0,
				97.0, 101.0, 103.0, 107.0,
				109.0, 113.0, 127.0, 131.0
			);
			const o = m.add(n);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.not.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(m[0][0] + n[0][0]);
			expect(o[0][1]).to.equal(m[0][1] + n[0][1]);
			expect(o[0][2]).to.equal(m[0][2] + n[0][2]);
			expect(o[0][3]).to.equal(m[0][3] + n[0][3]);
			expect(o[1][0]).to.equal(m[1][0] + n[1][0]);
			expect(o[1][1]).to.equal(m[1][1] + n[1][1]);
			expect(o[1][2]).to.equal(m[1][2] + n[1][2]);
			expect(o[1][3]).to.equal(m[1][3] + n[1][3]);
			expect(o[2][0]).to.equal(m[2][0] + n[2][0]);
			expect(o[2][1]).to.equal(m[2][1] + n[2][1]);
			expect(o[2][2]).to.equal(m[2][2] + n[2][2]);
			expect(o[2][3]).to.equal(m[2][3] + n[2][3]);
			expect(o[3][0]).to.equal(m[3][0] + n[3][0]);
			expect(o[3][1]).to.equal(m[3][1] + n[3][1]);
			expect(o[3][2]).to.equal(m[3][2] + n[3][2]);
			expect(o[3][3]).to.equal(m[3][3] + n[3][3]);
		});
	});

	describe("#add_assign", function(){
		it("行列の加算で左側と同じオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = new Matrix4x4(
				59.0, 61.0, 67.0, 71.0,
				73.0, 79.0, 83.0, 89.0,
				97.0, 101.0, 103.0, 107.0,
				109.0, 113.0, 127.0, 131.0
			);
			const o = m.add_assign(n);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(2.0 + n[0][0]);
			expect(o[0][1]).to.equal(3.0 + n[0][1]);
			expect(o[0][2]).to.equal(5.0 + n[0][2]);
			expect(o[0][3]).to.equal(7.0 + n[0][3]);
			expect(o[1][0]).to.equal(11.0 + n[1][0]);
			expect(o[1][1]).to.equal(13.0 + n[1][1]);
			expect(o[1][2]).to.equal(17.0 + n[1][2]);
			expect(o[1][3]).to.equal(19.0 + n[1][3]);
			expect(o[2][0]).to.equal(23.0 + n[2][0]);
			expect(o[2][1]).to.equal(29.0 + n[2][1]);
			expect(o[2][2]).to.equal(31.0 + n[2][2]);
			expect(o[2][3]).to.equal(37.0 + n[2][3]);
			expect(o[3][0]).to.equal(41.0 + n[3][0]);
			expect(o[3][1]).to.equal(43.0 + n[3][1]);
			expect(o[3][2]).to.equal(47.0 + n[3][2]);
			expect(o[3][3]).to.equal(53.0 + n[3][3]);
		});
	});

	describe("#sub", function(){
		it("行列の減算で異なるオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = new Matrix4x4(
				59.0, 61.0, 67.0, 71.0,
				73.0, 79.0, 83.0, 89.0,
				97.0, 101.0, 103.0, 107.0,
				109.0, 113.0, 127.0, 131.0
			);
			const o = m.sub(n);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.not.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(m[0][0] - n[0][0]);
			expect(o[0][1]).to.equal(m[0][1] - n[0][1]);
			expect(o[0][2]).to.equal(m[0][2] - n[0][2]);
			expect(o[0][3]).to.equal(m[0][3] - n[0][3]);
			expect(o[1][0]).to.equal(m[1][0] - n[1][0]);
			expect(o[1][1]).to.equal(m[1][1] - n[1][1]);
			expect(o[1][2]).to.equal(m[1][2] - n[1][2]);
			expect(o[1][3]).to.equal(m[1][3] - n[1][3]);
			expect(o[2][0]).to.equal(m[2][0] - n[2][0]);
			expect(o[2][1]).to.equal(m[2][1] - n[2][1]);
			expect(o[2][2]).to.equal(m[2][2] - n[2][2]);
			expect(o[2][3]).to.equal(m[2][3] - n[2][3]);
			expect(o[3][0]).to.equal(m[3][0] - n[3][0]);
			expect(o[3][1]).to.equal(m[3][1] - n[3][1]);
			expect(o[3][2]).to.equal(m[3][2] - n[3][2]);
			expect(o[3][3]).to.equal(m[3][3] - n[3][3]);
		});
	});

	describe("#sub_assign", function(){
		it("行列の減算で左側と同じオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = new Matrix4x4(
				59.0, 61.0, 67.0, 71.0,
				73.0, 79.0, 83.0, 89.0,
				97.0, 101.0, 103.0, 107.0,
				109.0, 113.0, 127.0, 131.0
			);
			const o = m.sub_assign(n);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.equal(m);
			expect(o).to.not.equal(n);

			expect(o[0][0]).to.equal(2.0 - n[0][0]);
			expect(o[0][1]).to.equal(3.0 - n[0][1]);
			expect(o[0][2]).to.equal(5.0 - n[0][2]);
			expect(o[0][3]).to.equal(7.0 - n[0][3]);
			expect(o[1][0]).to.equal(11.0 - n[1][0]);
			expect(o[1][1]).to.equal(13.0 - n[1][1]);
			expect(o[1][2]).to.equal(17.0 - n[1][2]);
			expect(o[1][3]).to.equal(19.0 - n[1][3]);
			expect(o[2][0]).to.equal(23.0 - n[2][0]);
			expect(o[2][1]).to.equal(29.0 - n[2][1]);
			expect(o[2][2]).to.equal(31.0 - n[2][2]);
			expect(o[2][3]).to.equal(37.0 - n[2][3]);
			expect(o[3][0]).to.equal(41.0 - n[3][0]);
			expect(o[3][1]).to.equal(43.0 - n[3][1]);
			expect(o[3][2]).to.equal(47.0 - n[3][2]);
			expect(o[3][3]).to.equal(53.0 - n[3][3]);
		});
	});

	describe("#scale", function(){
		it("行列のスカラー乗算で異なるオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const o = m.scale(59.0);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.not.equal(m);

			expect(o[0][0]).to.equal(m[0][0] * 59.0);
			expect(o[0][1]).to.equal(m[0][1] * 59.0);
			expect(o[0][2]).to.equal(m[0][2] * 59.0);
			expect(o[0][3]).to.equal(m[0][3] * 59.0);
			expect(o[1][0]).to.equal(m[1][0] * 59.0);
			expect(o[1][1]).to.equal(m[1][1] * 59.0);
			expect(o[1][2]).to.equal(m[1][2] * 59.0);
			expect(o[1][3]).to.equal(m[1][3] * 59.0);
			expect(o[2][0]).to.equal(m[2][0] * 59.0);
			expect(o[2][1]).to.equal(m[2][1] * 59.0);
			expect(o[2][2]).to.equal(m[2][2] * 59.0);
			expect(o[2][3]).to.equal(m[2][3] * 59.0);
			expect(o[3][0]).to.equal(m[3][0] * 59.0);
			expect(o[3][1]).to.equal(m[3][1] * 59.0);
			expect(o[3][2]).to.equal(m[3][2] * 59.0);
			expect(o[3][3]).to.equal(m[3][3] * 59.0);
		});
	});

	describe("#scale_assign", function(){
		it("行列のスカラー乗算で左側と同じオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const o = m.scale_assign(59.0);

			expect(o).to.be.an.instanceof(Matrix4x4);
			expect(o).to.equal(m);

			expect(o[0][0]).to.equal(2.0 * 59.0);
			expect(o[0][1]).to.equal(3.0 * 59.0);
			expect(o[0][2]).to.equal(5.0 * 59.0);
			expect(o[0][3]).to.equal(7.0 * 59.0);
			expect(o[1][0]).to.equal(11.0 * 59.0);
			expect(o[1][1]).to.equal(13.0 * 59.0);
			expect(o[1][2]).to.equal(17.0 * 59.0);
			expect(o[1][3]).to.equal(19.0 * 59.0);
			expect(o[2][0]).to.equal(23.0 * 59.0);
			expect(o[2][1]).to.equal(29.0 * 59.0);
			expect(o[2][2]).to.equal(31.0 * 59.0);
			expect(o[2][3]).to.equal(37.0 * 59.0);
			expect(o[3][0]).to.equal(41.0 * 59.0);
			expect(o[3][1]).to.equal(43.0 * 59.0);
			expect(o[3][2]).to.equal(47.0 * 59.0);
			expect(o[3][3]).to.equal(53.0 * 59.0);
		});
	});

	describe("#mul", function(){
		it("行列の乗算で異なるオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = new Matrix4x4(
				59.0, 61.0, 67.0, 71.0,
				73.0, 79.0, 83.0, 89.0,
				97.0, 101.0, 103.0, 107.0,
				109.0, 113.0, 127.0, 131.0
			);
			const mn = m.mul(n);

			expect(mn).to.be.an.instanceof(Matrix4x4);
			expect(mn).to.not.equal(m);
			expect(mn).to.not.equal(n);

			expect(mn[0][0]).to.equal(m[0][0] * n[0][0] + m[0][1] * n[1][0] + m[0][2] * n[2][0] + m[0][3] * n[3][0]);
			expect(mn[0][1]).to.equal(m[0][0] * n[0][1] + m[0][1] * n[1][1] + m[0][2] * n[2][1] + m[0][3] * n[3][1]);
			expect(mn[0][2]).to.equal(m[0][0] * n[0][2] + m[0][1] * n[1][2] + m[0][2] * n[2][2] + m[0][3] * n[3][2]);
			expect(mn[0][3]).to.equal(m[0][0] * n[0][3] + m[0][1] * n[1][3] + m[0][2] * n[2][3] + m[0][3] * n[3][3]);

			expect(mn[1][0]).to.equal(m[1][0] * n[0][0] + m[1][1] * n[1][0] + m[1][2] * n[2][0] + m[1][3] * n[3][0]);
			expect(mn[1][1]).to.equal(m[1][0] * n[0][1] + m[1][1] * n[1][1] + m[1][2] * n[2][1] + m[1][3] * n[3][1]);
			expect(mn[1][2]).to.equal(m[1][0] * n[0][2] + m[1][1] * n[1][2] + m[1][2] * n[2][2] + m[1][3] * n[3][2]);
			expect(mn[1][3]).to.equal(m[1][0] * n[0][3] + m[1][1] * n[1][3] + m[1][2] * n[2][3] + m[1][3] * n[3][3]);

			expect(mn[2][0]).to.equal(m[2][0] * n[0][0] + m[2][1] * n[1][0] + m[2][2] * n[2][0] + m[2][3] * n[3][0]);
			expect(mn[2][1]).to.equal(m[2][0] * n[0][1] + m[2][1] * n[1][1] + m[2][2] * n[2][1] + m[2][3] * n[3][1]);
			expect(mn[2][2]).to.equal(m[2][0] * n[0][2] + m[2][1] * n[1][2] + m[2][2] * n[2][2] + m[2][3] * n[3][2]);
			expect(mn[2][3]).to.equal(m[2][0] * n[0][3] + m[2][1] * n[1][3] + m[2][2] * n[2][3] + m[2][3] * n[3][3]);

			expect(mn[3][0]).to.equal(m[3][0] * n[0][0] + m[3][1] * n[1][0] + m[3][2] * n[2][0] + m[3][3] * n[3][0]);
			expect(mn[3][1]).to.equal(m[3][0] * n[0][1] + m[3][1] * n[1][1] + m[3][2] * n[2][1] + m[3][3] * n[3][1]);
			expect(mn[3][2]).to.equal(m[3][0] * n[0][2] + m[3][1] * n[1][2] + m[3][2] * n[2][2] + m[3][3] * n[3][2]);
			expect(mn[3][3]).to.equal(m[3][0] * n[0][3] + m[3][1] * n[1][3] + m[3][2] * n[2][3] + m[3][3] * n[3][3]);
		});
	});

	describe("#determinant", function(){
		it("4次正方行列の行列式", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const d = m.determinant();

			expect(d).to.equal(
				2.0 * (
					13.0 * (31.0 * 53.0 - 37.0 * 47.0) -
					17.0 * (29.0 * 53.0 - 37.0 * 43.0) +
					19.0 * (29.0 * 47.0 - 31.0 * 43.0)
				) -
				3.0 * (
					11.0 * (31.0 * 53.0 - 37.0 * 47.0) -
					17.0 * (23.0 * 53.0 - 37.0 * 41.0) +
					19.0 * (23.0 * 47.0 - 31.0 * 41.0)
				) +
				5.0 * (
					11.0 * (29.0 * 53.0 - 37.0 * 43.0) -
					13.0 * (23.0 * 53.0 - 37.0 * 41.0) +
					19.0 * (23.0 * 43.0 - 29.0 * 41.0)
				) -
				7.0 * (
					11.0 * (29.0 * 47.0 - 31.0 * 43.0) -
					13.0 * (23.0 * 47.0 - 31.0 * 41.0) +
					17.0 * (23.0 * 43.0 - 29.0 * 41.0)
				)
			);
		});
	});

	describe("#inverse", function(){
		it("逆行列で異なるオブジェクト", function(){
			const m = new Matrix4x4(
				2.0, 3.0, 5.0, 7.0,
				11.0, 13.0, 17.0, 19.0,
				23.0, 29.0, 31.0, 37.0,
				41.0, 43.0, 47.0, 53.0
			);
			const n = m.inverse();
			const mn = m.mul(n);
			const nm = n.mul(m);

			expect(n).to.be.an.instanceof(Matrix4x4);
			expect(mn[0][0]).is.closeTo(1.0, delta);
			expect(mn[0][1]).is.closeTo(0.0, delta);
			expect(mn[0][2]).is.closeTo(0.0, delta);
			expect(mn[0][3]).is.closeTo(0.0, delta);

			expect(mn[1][0]).is.closeTo(0.0, delta);
			expect(mn[1][1]).is.closeTo(1.0, delta);
			expect(mn[1][2]).is.closeTo(0.0, delta);
			expect(mn[1][3]).is.closeTo(0.0, delta);

			expect(mn[2][0]).is.closeTo(0.0, delta);
			expect(mn[2][1]).is.closeTo(0.0, delta);
			expect(mn[2][2]).is.closeTo(1.0, delta);
			expect(mn[2][3]).is.closeTo(0.0, delta);

			expect(mn[3][0]).is.closeTo(0.0, delta);
			expect(mn[3][1]).is.closeTo(0.0, delta);
			expect(mn[3][2]).is.closeTo(0.0, delta);
			expect(mn[3][3]).is.closeTo(1.0, delta);

			expect(nm[0][0]).is.closeTo(1.0, delta);
			expect(nm[0][1]).is.closeTo(0.0, delta);
			expect(nm[0][2]).is.closeTo(0.0, delta);
			expect(nm[0][3]).is.closeTo(0.0, delta);

			expect(nm[1][0]).is.closeTo(0.0, delta);
			expect(nm[1][1]).is.closeTo(1.0, delta);
			expect(nm[1][2]).is.closeTo(0.0, delta);
			expect(nm[1][3]).is.closeTo(0.0, delta);

			expect(nm[2][0]).is.closeTo(0.0, delta);
			expect(nm[2][1]).is.closeTo(0.0, delta);
			expect(nm[2][2]).is.closeTo(1.0, delta);
			expect(nm[2][3]).is.closeTo(0.0, delta);

			expect(nm[3][0]).is.closeTo(0.0, delta);
			expect(nm[3][1]).is.closeTo(0.0, delta);
			expect(nm[3][2]).is.closeTo(0.0, delta);
			expect(nm[3][3]).is.closeTo(1.0, delta);
		});
	});
});
