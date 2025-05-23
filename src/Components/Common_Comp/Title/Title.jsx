import './Title.css';

const Title = (props) => {
  return (
    <>
      <div className="Title">
        <div className="TitleContent text-light  d-flex  flex-column justify-content-center align-items-center">
          <h1>{props.title}</h1>
          <p>
            {props.page} <span> / {props.pageContent}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;

