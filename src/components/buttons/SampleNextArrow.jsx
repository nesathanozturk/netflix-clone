import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  );
};

export default SampleNextArrow;
