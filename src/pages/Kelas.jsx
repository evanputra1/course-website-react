import {Container, Row, Col} from 'react-bootstrap';
import {semuaKelas} from '../data/index'

import FaqComp from '../comp/FaqComp';

const Kelas = () => {
  return (
    <div className="kelas-page">
      <div className='kelas min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center'>Semua Course</h1>
              <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
              {semuaKelas.map((course) => {
                return (
                  <Col key={course.id} className='shadow rounded'>
                    <img src={course.image} className='mb-5 rounded-1' />
                    <div className='star mb-2 px-3'>
                      <i className={course.star1}></i>
                      <i className={course.star2}></i>
                      <i className={course.star3}></i>
                      <i className={course.star4}></i>
                      <i className={course.star5}></i>
                    </div>
                    <h5 className='mb-5 px-3'>{course.title}</h5>
                    <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                      <p className='m-0 text-primary fw-bold'>{course.price}</p>
                      <button className='btn btn-danger rounded-1'>{course.buy}</button>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      <FaqComp />
    </div>
  )
}

export default Kelas