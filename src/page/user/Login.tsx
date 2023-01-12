import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/vcpmc_logo.png'
import './login.css';
import { useForm } from 'react-hook-form';
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();
    const singleValue = getValues("userName");
    console.log(singleValue);

    return (
        <div id="page--login" className="bg-black text-white " style={{ height: "100vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col px-0">
                        <select className="form-select w-auto float-end  mt-4  pe-0  border border-1 border-white text-white" aria-label="Default select example">
                            <option defaultValue={'0'} className="text-white">Tiếng Việt  </option>
                            <option value="1">Tiếng Anh</option>
                            <option value="2">Tiếng Trung Quốc</option>
                            <option value="3">Tiếng Nhật</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 ">
                        <p className="d-flex justify-content-center">
                            <img className="bg-white rounded-circle p-2 py-3  img-fluid " src={logo} alt="logo" style={{ objectFit: 'cover' }} /></p>
                        <div className="text-center ">
                            <h3 className="text-white">Đăng nhập</h3>
                        </div>

                        <form onSubmit={handleSubmit((data) => console.log(data))}>
                            <p className="">
                                <label htmlFor="username">
                                    Tên đăng nhập
                                </label>
                                <input {...register('userName', { required: true })} className="form-control mt-2 text-white py-2" type="text" />
                            </p>
                            <p className="">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input {...register('password', { required: true, pattern: /\d+/ })} className="form-control mt-2 text-white py-2" type="password" />
                                {(errors.userName || errors.password) &&
                                    (
                                        <p>
                                            {(errors.userName?.type === 'allowed' || errors.password?.message === 'allowed') ?
                                                <span className="text-danger mt-2">
                                                    Hãy nhập tài khoản và mật khẩu
                                                </span> :
                                                <span className="text-danger mt-2">
                                                    Sai tên đăng nhập hoặc mật khẩu.
                                                </span>
                                            }

                                            {/* {(errors.userName?.type === 'required' || errors.password?.type === 'required') &&
                                                <span className="text-danger mt-2">
                                                    Sai tên đăng nhập hoặc mật khẩu.
                                                </span>} */}

                                        </p>)}
                            </p>
                            <p className="">
                                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
                                    Ghi nhớ đăng nhập
                                </label>
                            </p>
                            <div className="d-flex justify-content-center pt-3">
                                <button type="submit" className="btn btn-warning ">Đăng nhập</button>
                            </div>

                        </form>
                        <div className="d-flex justify-content-center">
                            <Link className="text-warning position-fixed text-center" to="#"
                                style={{ bottom: "25px", }}>
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
