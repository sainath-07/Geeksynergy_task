import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TopBar = ({ setSignupPage, setLoginPage, setMoviesPage, moviespage }) => {
  return (
    <div
      className="flex  fixed w-full top-0 right-0 h-[70px]  justify-between items-center z-50 bg-white border-b"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <div className="ml-4 font-bold text-3xl text-green-600 cursor-pointer">
        Movies <i className="bi  bi-tv text-black"></i>
      </div>

      <div className=" mr-4 flex gap-3">
        {!moviespage ? (
          <>
            <span
              className="text-xl border p-2 rounded-md font-bold cursor-pointer"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              onClick={() => {
                setLoginPage(true);
                setMoviesPage(false);
                setSignupPage(false);
               
              }}
            >
              Login
            </span>
            <span
              className="text-xl border p-2  rounded-md  font-bold cursor-pointer"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              onClick={() => {
                setSignupPage(true);
                setLoginPage(false);
                setMoviesPage(false);
              
              }}
            >
              Signup
            </span>
          </>
        ) : (
          <>
            <span
              className="text-xl border p-2  rounded-md  font-bold cursor-pointer"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              onClick={() => {
                if (window.confirm("Are you sure do you want to logout..?")) {
                  setSignupPage(true);
                  setLoginPage(false);
                  setMoviesPage(false);
                  toast.success("Logout is successfull!");
                }
              }}
            >
              Logout
            </span>
          </>
        )}

        <div
          className="text-xl border p-2  rounded-md  font-bold cursor-pointer"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
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
          Companay Info
        </div>
      </div>
    </div>
  );
};

export default TopBar;
