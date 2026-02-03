function getSecondLargest(nums) {
    // Complete the function
    let largest=-Infinity;
    let sec_largest=-Infinity;
    for (let i=0;i<nums.length;i++){
        if (nums[i]>largest){
            sec_largest=largest;
            largest=nums[i]
        }else if
            (nums[i]<largest && nums[i]>sec_largest){
              sec_largest=nums[i]  
            }
        }
    
    return sec_largest;
}
