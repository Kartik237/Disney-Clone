import PropTypes from "prop-types";
HeaderItem.propTypes = {
  name: PropTypes.string,
  Icon: PropTypes.node,
};
function HeaderItem(props) {
  const { name, Icon } = props;
  return (
    <div
      className="text-white flex items-center gap-3
    text-[15px] font-semibold curson-pointer hover:underline 
    underline-offset-8 mb-3 "
    >
      <Icon />
      <h2 className=" ">{name}</h2>
    </div>
  );
}

export default HeaderItem;
