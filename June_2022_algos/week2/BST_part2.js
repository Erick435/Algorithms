class BSTNode
{
    constructor(value)
    {
        this.left=undefined;
        this.right=undefined;
        this.value=value;
    }
};

class BST
{
    constructor()
    {
        this.root=undefined;
    }
    Contains(value)
    {
        /* Your Code Here */
        let node = this.root;
        while(node){
            if(node.value == value){       //     is this your number?
                return true;
            } 
            if(value < node.value){
                node = node.left;
            }
            else{
                node = node.right;
            }
        }
        return false;
    }

    ContainsRecursive(node,value)
    {
        /* Your Code Here */
        /* Call me recursively! */
        if(!node) return false;
        if(node.value == value) return true;
        
        return this.ContainsRecursive(value < node.value ? node.left: node.right, value)
    }

    /* I'm just here to print your BST In-Order. */
    /* Could use me as an example to solve above algos, since I'm recursive and all. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();

bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.right=new BSTNode(150);

bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);

bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

// console.log(bst.Log(bst.root));           /* Uncomment me if you want to see your tree */
// console.log(bst.Min())                      /* Expected: 25 */
// console.log(bst.Max())                      /* Expected: 175 */
console.log(bst.Contains(200))                  /* Expected: false */
console.log(bst.Contains(125))                  /* Expected: true */
console.log(bst.ContainsRecursive(15));   /* Expected: false */
console.log(bst.ContainsRecursive(75));   /* Expected: true */