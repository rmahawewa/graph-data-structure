import java.util.*;

class graph_bfs{
    static void bfs(List<List<Integer>> adj, int s){

        //create a queue for bfs
        Queue<Integer> q = new LinkedList<>();
        
        boolean[] visited = new boolean[adj.size()];

        visited[s] = true;
        q.add(s);

        while(!q.isEmpty()){
            int curr = q.poll();
            System.out.println(curr + " ");


            for(int x : adj.get(curr)){
                if(!visited[x]){
                    visited[x] = true;
                    q.add(x);
                }
            }
        }

    }
}