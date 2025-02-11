function addEdge(adj, i, j){
    //Undirected
    adj[i].push(j);
    adj[j].push(i);
    
}

function displayAdjList(adj){
    for(let i = 0; i<adj.length;i++){
        console.log(`${i}:`);
        for(const j of adj[i]){
            console.log(`${j}`);
        }
        console.log();
    }
}

const V = 4;
const adj = Array.from({length:V}, () => []);

//Now add edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);

console.log("Adjacency List Representation");
displayAdjList(adj);