export const SubmitButton = ({ nodes, edges }) => {
  const handleSubmit = async () => {
    
    const nodeIds = nodes.map((node) => node.id);

    
    const formattedEdges = edges.map((edge) => [edge.source, edge.target]);

    console.log("Node IDs:", nodeIds); 
    console.log("Formatted Edges:", formattedEdges);  

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes: nodeIds, edges: formattedEdges }),
      });

      if (!response.ok) {
        throw new Error('Failed to parse pipeline');
      }

      const data = await response.json();
      const { num_nodes, num_edges, is_dag } = data;

      
      alert(`Pipeline Results:\n- Nodes: ${num_nodes}\n- Edges: ${num_edges}\n- Is DAG: ${is_dag}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={handleSubmit} type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Submit
      </button>
    </div>
  );
};
