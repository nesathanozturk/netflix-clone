import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <ArrowBackIosOutlinedIcon />
      </button>
    </div>
  );
};

export default SamplePrevArrow;
