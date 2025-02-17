function dfsRec(adj, visited, s){
    //Mark the current vertex as visited
    visited[s] = true;

    //Print the current vertex
    ProcessingInstruction.stdout.write(s + " ");

    //Recursively visit all adjacent vertices thet are not visited yet
    for(let i of adj[s]){
        if(!visited[i]){
            dfsRec(adj, visited, i);
        }
    }
}

function dfs(adj, s){
    const visited = new Array(adj.length).fill(false);
     
    //Call the recursive DFS function
    dfsRec(adj, visited, s);
}

function addEdge(adj, s, t){
    //Add edge from vertex s to t
    adj[s].push(t);
    //Due to undirected Graph
    adj[t].push(s);
}

const V = 5; //Number of vertices in the graph

//Create an adjacency list for the graph
const adj = Array.from({length: V}, () => []);

//Define the edges of the graph
const edges = [[1,2], [1,0], [2,0], [2,3], [2,4] ];

//Populate the adjacency list with edges
for(let e of edges){
    addEdge(adj, e[0], e[1]);
}

const source = 1;
console.log("DFS from source: " + source);
dfs(adj, source);




//DFS for Complete Traversal of Disconnected Undirected Graph

function addEdge(adj, s, t){
    adj[s].push(t);
    adj[t].push(s);
}

//Recursive function for DFS traversal
function DFSRec(adj, visited, s){
    visited[s] = true;
    console.log(s + " ");

    //Recursively visit all adjacent vertices that are not visited yet
    adj[s].forEach(i => {
        if(!visited[i]) {
            DFSRec(adj, visited, i);
        }
    });
}

// Main DFS function to perfor, DFS for entire graph
function DFS(adj, V){
    let visited = new Array(V).fill(false);

    //Loop through all vertices to handle disconnected graph
    for(let i=0; i<V; i++){
        if(!visited[i]){
            DFSRec(adj, visited, i);
        }
    }
}

//Driver code
let V1=6;

//Create an adjacency list for the graph
let adj1 = new Array(V1);
for(let i = 0; i < V1; i++){
    adj[i] = [];
}

//Define the edges of the graph
let adges = [[1,2], [2,0], [0,3], [4,5] ];

//Populate the adjacency list with edges
edges.forEach(edge => { addEdge(adj, edge[0], edge[1]); });

console.log("Complete DFS of the graph: ");
dfs(adj, V);




