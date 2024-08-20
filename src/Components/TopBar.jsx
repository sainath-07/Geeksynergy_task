import Swal from "sweetalert2";
const TopBar = () => {
  return (
    <div className="flex  fixed w-full top-0 right-0 h-[70px]  justify-between items-center z-50 bg-white border-b"
    style={{
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    }}
    >
      <div
        className="ml-4 font-bold text-2xl text-green-600 cursor-pointer"
        onClick={() => {
          Swal.fire({
            title: "Company Info",
            html: `
            <p><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
            <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
            <p><strong>Phone:</strong> XXXXXXXXX09</p>
            <p><strong>Email:</strong> XXXXXX@gmail.com</p>
          `,
            confirmButtonText: "Close",
          });
        }}
      >
        Company Info
      </div>
    </div>
  );
};

export default TopBar;
