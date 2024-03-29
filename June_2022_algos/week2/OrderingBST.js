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
    /* I'm just here to print your BST In-Order. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }
    /* Ordering: Node, Left, Right */
    /* Description: Traverse / Iterate the tree Pre-Order. */
    PreOrder(node)
    {
        if(!node) return;
        console.log(node.value);
        this.InOrder(node.left);
        this.InOrder(node.right);
        /* Call me recursively */

    }
    /* Ordering: Left, Node, Right */    
    /* Description: Traverse / Iterate the tree In-Order. */
    InOrder(node)
    {
        if(!node) return;
        this.InOrder(node.left);
        console.log(node.value);
        this.InOrder(node.right);
        /* Call me recursively */

    }
    /* Left, Right, Node */
    /* Description: Traverse / Iterate the tree Post-Order. */
    PostOrder(node)
    {
        if(!node) return;
        /* Call me recursively */
        this.InOrder(node.left);
        this.InOrder(node.right);
        console.log(node.value);
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();
bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);
bst.root.right=new BSTNode(150);
bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

// console.log(bst.PreOrder(bst.root));     /* Expected: 100 50 25 75 150 125 175 */
console.log(bst.InOrder(bst
    .root));     /* Expected: 25 50 75 100 125 150 175 */
// console.log(bst.PostOrder(bst.root));   /* Expected: 25 75 50 125 175 150 100 */
