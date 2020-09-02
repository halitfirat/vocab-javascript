import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';

import formFields from './formFields';
import { addVocab } from '../../store/vocab/vocabAction';
import { addVocabLoading } from '../../store/vocab/vocabSelector';

const AddVocab = ({ history }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const addVocabLoadingSelector = useSelector(addVocabLoading);

  const myHandleSubmit = (data) => {
    dispatch(addVocab(data, history));
  };

  const renderFields = () => {
    return formFields.map(({ placeholder, name }) => {
      return (
        <Col key={name}>
          <Form.Control
            id={name}
            placeholder={placeholder}
            name={name}
            ref={register({ required: true })}
            autoComplete="off"
            noValidate
          />

          {errors[name] && (
            <span style={{ color: 'MediumBlue' }}>This field is required!</span>
          )}
        </Col>
      );
    });
  };

  return (
    <div>
      <form id="addVocab" onSubmit={handleSubmit(myHandleSubmit)}>
        <div style={{ textAlign: 'right' }}>
          <Link to="/vocabs">
            <Button variant="primary" className="button-top">
              Cancel
            </Button>
          </Link>

          <Button variant="primary" className="button-top ml-1" type="submit">
            Save Vocab
            {addVocabLoadingSelector && (
              <Spinner animation="border" size="sm" />
            )}
          </Button>
        </div>

        <Row>{renderFields()}</Row>
      </form>
    </div>
  );
};

export default AddVocab;
