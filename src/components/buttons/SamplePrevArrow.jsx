import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <ArrowBackIosOutlinedIcon />
      </button>
    </div>
  );
};
