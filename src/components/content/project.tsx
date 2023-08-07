import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { BsArrowRight } from "react-icons/bs";
import {IoLogoNodejs} from 'react-icons/io'
import {SiDotnet} from 'react-icons/si'
import {IoLogoVue} from 'react-icons/io5'
// import {BiLogoVuejs} from 'react-icons/bi'
import {DiLaravel} from 'react-icons/di'

interface IProject {
  image: JSX.Element
  title: string
  shortDescription: string
  detail: {
    description?: string
    frontend: string
    backend: string
    member: number | string
    role: string
    demo?: string
    github?: string
  }
}
const Project = () => { 
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const dataProjects: IProject [] = [{
        image: <IoLogoNodejs
        size={50}
        color='#3C873A'
        />,
        title: 'Bookingcare SSR',
        shortDescription: 'Support communication between patient and pharmacy',
        detail: {
            description: '',
            frontend: 'Nodejs (Express.js)',
            backend: 'Nodejs',
            member: '1',
            role: 'dev',
            demo: '',
            github: 'https://github.com/tung175/bookingcare-ssr',
        }
    },
    {
        image: <SiDotnet
        color='#9900ff'
        size={50}
        />,
        title: 'Project Management',
        shortDescription: 'Management of graduation projects',
        detail: {
            description: '',
            frontend: '.Net (C#)',
            backend: 'Nodejs',
            member: '1',
            role: 'dev',
            demo: '',
            github: '',
        }
    },
    {
        image: <IoLogoVue 
        size={50}
        color='#10c40a'

        />,
        title: 'dienmaynhuy.tk',
        shortDescription: 'Selling electronics online',
        detail: {
            description: '',
            backend: 'Nodejs',
            frontend: 'Laravel (PHP), Vue.js',
            member: '1',
            role: 'dev',
            demo: '',
            github: '',
        }
    },
    {
        image: <DiLaravel
        color='#f00707'
        size={50}
        />,
        title: 'Shoplaravel',
        shortDescription: 'Ecomment using laravel',
        detail: {
            description: '',
            frontend: 'laravel (PHP)',
            backend: 'Nodejs',
            member: '1',
            role: 'dev',
            demo: '',
            github: 'https://github.com/tung175/demo_project_1_4',
        }
    },
    // {
    //     image: 'img/svg/camera-diaphragm.svg',
    //     title: 'Website Clone Tiki',
    //     shortDescription: '',
    //     detail: {
    //         description: '',
    //         frontend: '',
    //         member: '',
    //         role: '',
    //         demo: '',
    //         github: '',
    //     }
    // },
    // {
    //     image: 'img/svg/camera-diaphragm.svg',
    //     title: 'Website Clone Tiki',
    //     shortDescription: '',
    //     detail: {
    //         description: '',
    //         frontend: '',
    //         member: '',
    //         role: '',
    //         demo: '',
    //         github: '',
    //     }
    // }
  ]
    

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setDataDetail(null)
  }
    return (
        <>
      <Modal 
      title={dataDetail && dataDetail.title ? `Project: ${dataDetail.title}` : ''}
      open= {isModalOpen}
      onOk={handleCloseModal} 
      onCancel={handleCloseModal}
      footer={null}
      maskClosable={false}
      >
        {dataDetail && 
          <ul>
          <li>Description: {dataDetail.detail.description} </li>
          <li>Frontend: {dataDetail.detail.frontend} </li>
          <li>Backend:{dataDetail.detail.backend}</li>
          <li>Member:{dataDetail.detail.member}</li>
          <li>Role:{dataDetail.detail.role}</li>
          <li>Demo:
            <a href='{dataDetail.detail.demo}' target='_blank'>{dataDetail.detail.demo}</a>
          </li>
          <li>Github:
            <a href='{dataDetail.detail.github}' target='_blank'>{dataDetail.detail.github}</a>
          </li>


        </ul>
        }
        
      </Modal>
        <div className="arlo_tm_section" id="projects">
            
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>Meet our amazing Projects</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                    return(
                <li key={`${index}-project`}>
                  <div className="inner" title='View detail' style={{cursor:'pointer'}} onClick={() => {
                    setDataDetail(item)
                    setIsModalOpen(true)}}>
                    <div className="icon">
                    {item.image}
                      
                    </div>
                    <div className="title_service">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="text">
                      <p>{item.shortDescription}</p>
                    </div>
                    <div className='view_detial'style={{padding: "5px 0"}}>
                      <span style={{cursor: "pointer"}}>
                        <BsArrowRight/>
                        {/* &nbps; */}
                        <> </>
                        Xem chi tiết
                      </span>
                    </div>
                  </div>
                </li>
                    )
                })}
                 
              </ul>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Project