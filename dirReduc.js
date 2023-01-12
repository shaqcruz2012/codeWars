//Problem: reduce a set of directions to remove redundancy
//Steps: declare opposite object, reduce function with nested callback
//          callback iterates to check if last dirs equals opposite
//          if so pops currents from dirs, else pushes curreet to dir

function dirReduc(plan) {
    //declare an object with the opposites from keys
      var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}
      /*reduce() method to iterate through plan array
      //redude() takes in a callbck function
      //    callback function has parameters dirs, dir and initial value
            dirs is accumulated value of the callback function
            dir is current element being processed in plan array
            initial value is an empty array
      */
        return plan.reduce(function(dirs, dir){
            /* callback checks if last element of dirs equals 
            opposite direction of dir in the opposite object
                if true, pops from dirs: push to dirs current dir
            */
            dirs[dirs.length - 1] === opposite[dir] ?
            dirs.pop()
            : dirs.push(dir)
            //callback returns accumulated dirs
          return dirs
        }, [])
    }