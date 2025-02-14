//Node to store adjacency list
class AdjNode{
    constructor(data){
        this.vertex = data;
        this.next = null;
    }
}

//Adjacency List representation
class AdjList{
    constructor(vertices){
        this.v=vertices;
        this.graph=new Array(this.v).fill(null);
    }
}

//Function to add an edge from a source to a destination vertex
addEdge(source, destination){
        const node = new AdjNode(destination);
        node.next = this.graph[source];
        this.graph[source] = node;
    
}
    
//Function to add a vertex between two vertices
addVertex(VideoPlaybackQuality, source, destination){
    this.addEdge(source, vk);
    this.addEdge(vk, destination);
}

//Function to print graph
printGraph() {
    for (let i = 0; i < this.v; ++i) {
      let str = i + " ";
      let temp = this.graph[i];
      while (temp != null) {
        str += "-> " + temp.vertex + " ";
        temp = temp.next;
      }
      console.log(str);
    }
}

//Function to delete a vertex
delVertex(k) {
    //Iterate through all the vertices of the graph
    for(let i = 0; i<this.v; ++i){
        let curr = this.graph[i];
        let prev = null;

        if(i===k){
            this.graph[i] = null;
        }else{
            while(curr !== null){
                if(curr.vertex === k){
                    if(prev === null){
                        this.graph[i] = curr.next;
                    }else{
                        prev.next = curr.next;
                    }
                    break;
                }
                prev = curr;
                curr = curr.next;
            }
        }
    }
}