import image from '$assets/electrovite.png';

const App = () => {
  return (
    <div>
      <div className='icon'>
        <img src={image} />
      </div>
      <h1>ElectroVite</h1>
      <p className='teaser'>
        A preconfigured project for creating robust desktop apps with ReactJS.
      </p>
      <p className='teaser light'>
        Edit <span>App.tsx</span> to create a wonderful application.
      </p>
    </div>
  );
};

export default App;
