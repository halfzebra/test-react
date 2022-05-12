import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import moment from 'moment';
import { FormError } from '../components/FormError';
import {
  Item,
  USER_PERSON,
  USER_COMPANY,
  AD_AUCTION,
  AD_BUY_IT_NOW,
} from '../utils/calculator';
import { Select } from '../components/Select';

const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const schema = yup
  .object({
    itemType: yup
      .number()
      .integer()
      .oneOf([AD_AUCTION, AD_BUY_IT_NOW])
      .required(),
    userType: yup
      .number()
      .integer()
      .oneOf([USER_PERSON, USER_COMPANY])
      .required(),
    price: yup.number().positive().integer().required(),
    endDate: yup.string().matches(DATE_REGEX).required(),
  })
  .required();

export const NewItemForm = ({ onSubmit }: { onSubmit: (data: Item) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({ resolver: yupResolver(schema) });

  return (
    <form className="New-item-form" onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(errors).length > 0 && <FormError errors={errors} />}

      <div className="form-group">
        <label>You are</label>
        <Select
          name="userType"
          className="form-control"
          register={register}
          options={[
            ['', 'Select'],
            [USER_PERSON.toString(), 'Person'],
            [USER_COMPANY.toString(), 'Company'],
          ]}
          required
        />
      </div>

      <div className="form-group">
        <label>Item Type</label>
        <Select
          name="itemType"
          className="form-control"
          register={register}
          options={[
            ['', 'Select'],
            [AD_AUCTION.toString(), 'Auction'],
            [AD_BUY_IT_NOW.toString(), 'Buy it now'],
          ]}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          className="form-control"
          type="number"
          {...register('price')}
          defaultValue={100}
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End date</label>
        <input
          className="form-control"
          type="text"
          defaultValue={moment().format('YYYY-MM-DD')}
          {...register('endDate')}
        />
      </div>

      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  );
};
