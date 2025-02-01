function bfs(adj, s){
    const visited = Array(V).fill(false);
    const queue = [];

    //Mark the source node as visited and enqueue it
    visited[s] = true;
    queue.push(s);

    while(queue.length){
        //dequeue a vertex from queue and print it
        const curr = queue.shift();
        Process.stdout.write(curr + " ");


        for (const x of adj[curr]){
            if(!visited[x]){
                visited[x] =true;
                queue.push(x);
            }
        }
    }
}

function addEdge(u,v){
    adj[u].push(v);
    adj[v].push(u);
}


const V=5;
const adj = Array.from({length: V}, () => []);
addEdge(0,1);
addEdge(0,2);
addEdge(1,3);
addEdge(1,4);
addEdge(2,4);

console.log("BFS starting from 0:");
bfs(adj, 0);