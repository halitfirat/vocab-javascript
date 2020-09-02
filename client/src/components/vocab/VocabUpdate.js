import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form, Row, Col, Spinner } from 'react-bootstrap';

import formFields from './formFields';
import { updateVocab } from '../../store/vocab/vocabAction';
import { updateVocabLoading } from '../../store/vocab/vocabSelector';

const VocabUpdate = ({ showUpdateVocab, onHide, vocab }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const updateVocabLoadingSelector = useSelector(updateVocabLoading);

  const onHandleSubmit = async ({ native, foreign }) => {
    try {
      await dispatch(updateVocab({ ...vocab, native, foreign, score: 0 }));
      onHide();
    } catch (error) {
      console.log(error);
    }
  };

  const renderFields = () => {
    return formFields.map(({ name }) => {
      return (
        <Col key={name}>
          <Form.Control
            name={name}
            ref={register({ required: true })}
            defaultValue={vocab[name]}
            autoComplete="off"
            noValidate
          />

          {errors[name] && (
            <span style={{ color: 'red' }}>This field is required!</span>
          )}
        </Col>
      );
    });
  };

  return (
    <Modal
      show={showUpdateVocab}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(onHandleSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Vocab
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>{renderFields()}</Row>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide} className="mr-2">
            Cancel
          </Button>

          <Button type="submit">
            Update
            {updateVocabLoadingSelector && (
              <Spinner animation="border" size="sm" />
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default VocabUpdate;
