export function AuroraBackground() {
  return (
    <div className="aurora-mesh">
      <div
        className="aurora-blob blob-purple"
        style={{
          width: '400px',
          height: '400px',
          top: '10%',
          left: '10%',
        }}
      />
      <div
        className="aurora-blob blob-teal"
        style={{
          width: '500px',
          height: '500px',
          top: '40%',
          right: '5%',
        }}
      />
      <div
        className="aurora-blob blob-pink"
        style={{
          width: '350px',
          height: '350px',
          bottom: '10%',
          left: '30%',
        }}
      />
    </div>
  );
}
