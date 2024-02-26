/* 
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 示例 2：

输入：n = 1
输出：[[1]]
 

提示：

1 <= n <= 20
*/
var generateMatrix = function(n){
    //定义初始位置 0 0
    let startX = 0, startY = 0;
    //定义旋转圈数 后序进行奇数的判断 当前默认为偶数
    let loop = Math.floor(n/2)
    //中间位置 方便奇数时候的填写最后的数字 奇数时剩余最内一圈为中间位置
    let mid = Math.floor(n/2)
    //控制每层填充元素的个数的改变
    let offset = 1;
    //控制填充的数字
    let count = 1;
    //创建一个多维数组 并且都赋值为0
    let res = new Array(n).fill(0).map(()=>new Array(n).fill(0))

    while(loop--){
        //初始化行row 列col
        let row = startX, col = startY
        //先遍历第一行 左闭右开
        //这里将count 放在最外面进行初始化，让所有的count共享
        for(;col < n - offset;col++){
            res[row][col] = count++
        }
        //遍历最右面的一列 一直都是左闭右开
        for(;row < n - offset;row++){
            res[row][col]=count++
        }
        //遍历最下面的一行
        for(;col > startY;col--){
            res[row][col] = count++
        }
        //遍历最左边的第一列
        for(;row>startX;row--){
            res[row][col] = count++
        }
        //更新其实位置 方便第二次循环
        startX++;
        startY++
        //更新offset
        offset++

    }
    //如果为奇数，需要单独给最内层的一个圈赋值
    if(n%2===1){
        res[mid][mid] = count
    }
    return res
        
        
}