/**
 * Created by Anshi on 2018/10/1.
 */


/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function (A) {

  let position = 0;
  for (let i = 0; i < A.length; i++) {
	if (A[i] % 2 === 0) {
	  [A[position], A[i]] = [A[i], A[position]];
	  position++;
	}
  }
  console.log(A)
  return A;
};


/*another 时间换空间 新建数组 偶数放前奇数放后。*/

sortArrayByParity([3, 1, 2, 4])
sortArrayByParity([])