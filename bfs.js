


    let graphNodes = [
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0]
    ];

    let new_graph_node = [
        [0,0,0,0,0,0],
        [0,0,1,0,0,0],
        [0,0,0,1,0,1],
        [0,1,1,0,1,0],
        [0,0,0,0,1,0],
        [0,0,1,1,0,0],
    ]
    
    console.log(newBfs(new_graph_node, 1))
    function newBfs(graph, root){
        let result = {}

        for(let i=0;i<new_graph_node.length;i++){
            result[i] = Infinity
        }
        result[root] =0
        let line = [root];
        let currentIterator;
        while(line.length != 0 ){
            currentIterator = line.shift()
            let curConnected = new_graph_node[currentIterator];
            let neighborIdx = [];
            let idx = curConnected.indexOf(1)
            while(idx !=-1){
                neighborIdx.push(idx);
                idx = curConnected.indexOf(1,idx+1)
            }
            for(let j=0;j<neighborIdx.length;j++){
                if(result[neighborIdx[j]]==Infinity){
                    result[neighborIdx[j]] = result[currentIterator]+1;
                    line.push(neighborIdx[j])
                }
            }
        }
        return result
    }

    console.log(bfs(new_graph_node, 1))
    
    function bfs(graph, root) {
        let nodesLen = {};
        for (let i = 0; i < graph.length; i++) {
            nodesLen[i] = Infinity;
        }
        nodesLen[root] = 0
        let queue = [root]
        let current;
        while (queue.length !=0){
            current = queue.shift()    
            let curConnected = graph[current];
            let neighborIdx = [];
            let idx = curConnected.indexOf(1)
            while(idx != -1){
                neighborIdx.push(idx);
                idx = curConnected.indexOf(1,idx+1)
            }
            for(let j=0;j<neighborIdx.length;j++){
                if(nodesLen[neighborIdx[j]]==Infinity){
                    nodesLen[neighborIdx[j]] = nodesLen[current]+1;
                    queue.push(neighborIdx[j])
                }
            }
        }
        return nodesLen
    }
    

