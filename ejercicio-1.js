var removeDuplicates = function(nums) {
  let position;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i+1] === undefined) {
      k++
      break
    }
    if(nums[i] === nums[i+1]) {
      if(position === undefined) {
        position = i
      }
    } else if(nums[i] !== nums[i+1]) {
      console.log("son diferentes")
      if(position === undefined)
        position = 0
      nums[position+1] = nums[i+1]
      position = position + 1
      k++
    }

    console.log("POSITION: ", position, i)
    console.log("los nums", nums)
  }
  // k = nums.length ? 0 : k+1
  console.log("como quedo position", position)
  console.log("k",k)
  return k
};


const nums = []
removeDuplicates(nums)