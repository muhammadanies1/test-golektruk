"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { IconGolekTruk } from "@/assets";

const Register = () => {
  const router = useRouter();

  function toLogin() {
    router.push("/");
  }

  return (
    <div className="container-pages">
      <div className="columns-login-left">
        <div className="container-columns">
          <Image
            src="https://golektruk.com/registrasi.png"
            alt="image-registrasi"
            width={510}
            height={750}
          />
          <p className="label-message">
            <span>Tumbuh dan bertahan bersama GolekTruk</span>
          </p>
          <p className="label-message">
            <span>
              Yuk buat akun GolekTruk untuk menambah peluang dan memperluas
              jaringan pemasaran bisnis Anda
            </span>
          </p>
        </div>
      </div>
      <div className="columns-login-right">
        <div className="card-register">
          <div className="container-logo">
            <Image src={IconGolekTruk} alt="icon-golektruk" />
          </div>
          <span className="label-masuk">Buat Akun</span>
          <div className="form">
            <div className="field-container">
              <label>Email</label>
              <input placeholder="Type Email" />
            </div>
            <div className="field-container">
              <label>Name</label>
              <input placeholder="Type Name" />
            </div>
            <div className="field-container">
              <label>Phone</label>
              <input placeholder="Type Phone" />
            </div>
            <div className="field-container">
              <label>Password</label>
              <input placeholder="Type Password" />
            </div>
            <div className="field-container">
              <label>Age</label>
              <input placeholder="Type Age" />
            </div>
            <div className="field-container-images">
              <label>Photos</label>
              <input
                className="input-image"
                type="file"
                placeholder="Type Photos"
              />
            </div>
          </div>
          <button>Simpan</button>
          <p>
            <span className="text-black">Sudah punya akun? </span>
            <span onClick={toLogin} className="label-daftar">
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
