//Below is the implementation of Graph Data Structure represented using Adjacency Matrix:

function addEdge(mat, i, j){
    //Graph is undirected
    mat[i][j] = 1;
    mat[j][i] = 1;
}

function displayMatrix(mat){
    //Display the adjacency matrix
    for (const row of mat){
        console.log(row.join(" "));
    }
}

//Main function to run the program
const V = 4; //Number of vertices

//Initialize matrix
let mat = Array.from({length: V}, () => Array(V).fill(0));

//Add edges to the graph
addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);

console.log("Adjacency Matrix:");
displayMatrix(mat);