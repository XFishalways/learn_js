let findMedianSortedArrays = function(nums1, nums2) {
  let newarr = nums1.concat(nums2);
  newarr.sort((a, b) => a - b);
  if(newarr.length % 2 == 0) {
    return (newarr[newarr.length/2 - 1] + newarr[newarr.length/2])/2;
  }
  return newarr[(newarr.length - 1)/2];
};

let arr1 = [1, 2];
let arr2 = [3, 4];

findMedianSortedArrays(arr1, arr2);