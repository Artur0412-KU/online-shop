import React from "react";
import { Dropdown, Space, Divider, Menu } from "antd";
import { Link } from "react-router-dom";
import items from "./Items";
import Smartphone from "../img/catalog-icons/smartphone.svg";
import laptop from "../img/catalog-icons/laptop.svg";
import tablet from "../img/catalog-icons/tablet.svg";
import PC from "../img/catalog-icons/pc.svg";
import TV from "../img/catalog-icons/tv.svg";
import watch from "../img/catalog-icons/watch.svg";
import audio from "../img/catalog-icons/audio.svg";
import console from "../img/catalog-icons/console.svg";
import photo from "../img/catalog-icons/photo.svg";
import kids from "../img/catalog-icons/kids.svg";
import sale from "../img/catalog-icons/sale.svg";

export default function ProductList() {
  return (
    <div className="product-list">
      <div className="catalog-nav">
        <Space className="catalog-item" style={{ alignItems: "center" }}>
          <Link to="/smartphones" className="catalog-list">
            <img src={Smartphone} alt="Smartphone" /> Smartphone
          </Link>
          <i className="arrow right"></i>
        </Space>
      </div>
     
      <Divider style={{ marginTop: "8px", color: "#808080" }} />

      
      <div className="catalog-nav">
        <Space
          className="catalog-item"
          style={{ alignItems: "center", gap: "190px" }}
        >
          <Link to="/smartphones" className="catalog-list">
            <img src={laptop} alt="Laptop" /> Laptop
          </Link>
          <i className="arrow right"></i>
        </Space>
      </div>
  
      <Divider style={{ marginTop: "8px", color: "#808080" }} />


        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "200px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={tablet} alt="Tablet" /> Tablet
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />


        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "235px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={PC} alt="PC" /> PC
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />


        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "50px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={TV} alt="TV" />
              TVs and Multimedia
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />


        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "126px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={watch} alt="Smart-watch" /> Smart-watch
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />


        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "200px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={audio} alt="Audio" /> Audio
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />

   
        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "110px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={console} alt="Game console" /> Game console
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />

        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "86px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={photo} alt="Photo and video" /> Photo and video
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />

        <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{ alignItems: "center", gap: "210px" }}
          >
            <Link to="/smartphones" className="catalog-list">
              <img src={kids} alt="KIDS" /> KIDS
            </Link>
            <i className="arrow right"></i>
          </Space>
        </div>

      <Divider style={{ marginTop: "8px", color: "#808080" }} />
        
      <div className="catalog-nav">
          <Space
            className="catalog-item"
            style={{
              alignItems: "center",
              marginBottom: "0px",
              gap: "210px",
            }}
          >
            <Link to="/smartphones" className="catalog-list" style={{ color: "red" }}>
              <img src={sale} alt="SALE" /> SALE
            </Link>
            <i className="arrow right"></i>
          </Space>
      </div>
      <Divider
        style={{ marginTop: "8px", marginBottom: "0px", color: "#808080" }}
      />
    </div>
  );
}
