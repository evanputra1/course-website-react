import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png';

import {courseTerbaru} from '../data/index'

const Home = () => {
  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className='header-box d-flex align-items-center'>
              <Col lg='6'>
                <h1 className='mb-4'>
                  Temukan <br /> <span>Bakat dan Skill</span> <br /> Kreatifmu Disini
                </h1>
                <p className='mb-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum illum quia voluptate vel non similique!
                </p>
                <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2'>Lihat Kelas</button>
                <button className='btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2'>Lihat Promo</button>
              </Col>
              <Col lg='6' className='pt-lg-0 pt-5'>
                <img src={HeroImage} alt="Hero Images" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className='text-center fw-bold'>Course Terbaru</h1>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic.</p>
              </Col>
            </Row>
            <Row>
              {courseTerbaru.map((course) => {
                return (
                  <Col key={course.id}>
                    <img src={course.image} />
                    <div>
                      <i className={course.star1}></i>
                      <i className={course.star2}></i>
                      <i className={course.star3}></i>
                      <i className={course.star4}></i>
                      <i className={course.star5}></i>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Home