//Write a function to see if a binary tree ↴ is "superbalanced"
//(a new tree property we just made up).

//A tree is "superbalanced" if the difference between the depths of any two leaf 
//nodes ↴
//A leaf node is a tree node with no children.

//It's the "end" of a path to the bottom, from the root.
//is no greater than one.

//Here's a sample binary tree node class:

// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insertLeft(value) {
//     this.left = new BinaryTreeNode(value);
//     return this.left;
//   }

//   insertRight(value) {
//     this.right = new BinaryTreeNode(value);
//     return this.right;
//   }
// }

function isBalanced(treeroot) {
    // A tree with no nodes is superbalanced, since there are no leaves!

    if (!treeroot) {
        return true
    }

    const depths = [] // we short-circuit as soon as we find more than 2

    // Nodes will store pairs of a node and the node's depth
    const nodes = []
    nodes.push([treeroot, 0])

    while (nodes.length) {
        const nodePairs = nodes.pop();
        const node = nodePairs[0];
        const depth = nodePairs[1];

        if (!node.left && !node.right) {
            // Сase: we found a leaf
            // We only care if it's a new depth
            if (depths.indexOf(depth) < 0) {
                depths.push(depth)
                // Two ways we might now have an unbalanced tree:
                //   1) More than 2 different leaf depths
                //   2) 2 leaf depths that are more than 1 apart
                if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1] > 1))) {
                    return false
                }
            }
        } else {
            // Case: this isn't a leaf - keep stepping down
            if (node.left) {
                nodes.push([node.left, depth + 1])
            }
            if (node.right) {
                nodes.push([node.right, depth + 1])
            }
        }
    }
    return true
}

console.log(isBalanced([1, 2, 3, 4]))

// complexity: O(n) time and O(n) space

//What We Learned
//This is an intro to some tree basics. If this is new to you, don't worry—it 
//can take a few questions for this stuff to come together. We have a few more 
//coming up.

//Particular things to note:

//Focus on depth-first ↴ vs breadth-first ↴ traversal. You should be very 
//comfortable with the differences between the two and the strengths and 
//weaknesses of each.

//You should also be very comfortable coding each of them up.

//One tip: Remember that breadth-first uses a queue ↴ and depth-first uses a 
//stack ↴ (could be the call stack or an actual stack object). That's not just a 
//clue about implementation, it also helps with figuring out the differences in 
//behavior. Those differences come from whether we visit nodes in the order we see them 
//(first in, first out) or we visit the last-seen node first (last in, first out).