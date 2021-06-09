import { UserInputError } from 'apollo-server-lambda';
import { BR_STATES_LIST } from '../models/br-states.list';
import { COUNTRY_LIST } from '../models/country.list';
import { DISABILITY_LIST } from '../models/disability.list';
import { EDUCATION_LIST } from '../models/education.list';
import { GENDER_LIST } from '../models/gender.list';
import { INTEREST_ZONE_LIST } from '../models/interest-zone.list';
import { JOB_TYPE_LIST } from '../models/job-type.list';
import { JOB_LIST } from '../models/job.list';
import { LAND_CATEGORY_LIST } from '../models/land-category.list';
import { LANGUAGE_LIST } from '../models/language.list';
import { OPPORTUNITY_CATEGORY_LIST } from '../models/opportunity-category.list';
import { ORGANIZATION_CATEGORY_LIST } from '../models/organization-category.list';
import { PLACE_CATEGORY_LIST } from '../models/place-category.list';
import { RACE_LIST } from '../models/race.list';
import { SEX_ORIENTATION_LIST } from '../models/sex-orientation.list';
import { BIRTH_SIGN_LIST } from '../models/sign.list';
import { SKILL_LIST } from '../models/skill.list';
import { WORK_EXPERIENCE_LIST } from '../models/work-experience.list';
import { getMongoDoc } from '../utils/mongo.util';

/**
* create - Função que cria um asset no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { assets }) => {
  let address;

  if (!args.asset.data) throw new Error('Missing "asset.data" value');
  try {
    address = getMongoDoc(await assets.create(args.asset));
  } catch (err) {
    console.log([err]);
    const duplicatedKeys = Object.keys(err.keyPattern);
    if (duplicatedKeys) {
      throw new UserInputError(`Duplicated in [${duplicatedKeys.toString()}] keys`, {
        invalidArgs: duplicatedKeys,
      });
    }
    throw new Error(err);
  }

  return { ...address, id: address._id };
};

/**
* findOne - Função que acha um asset por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { assets }) => {
  if (!args.asset.type) throw Error('Missing "asset.type" value');

  const result = getMongoDoc(await assets.findOne({ type: args.asset.type }));
  return { ...result, id: result._id };
};

/**
 findAll - Função que acha retorna assets com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = async (parent, args, { assets }) => {
  const paginator = args.paginator || {};
  const response = await assets.find(args.asset)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .lean()
    .then(resp => resp.map(asset => ({ ...asset, id: asset._id })))
    .catch((err) => {
      throw new Error(err);
    });

  return response;
};

/**
* update - Função que atualiza o asset
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { assets }) => {
  if (!args.asset.data) throw new Error('Missing "address.data" value');
  if (!args.asset.type) throw new Error('Missing "address.type" value');

  const resp = await assets.findOneAndUpdate(
    { type: args.asset.type },
    args.asset,
    { new: true },
  );
  const address = getMongoDoc(resp);

  return { ...address, id: address._id };
};

/**
* populate - Função que popula os assets
*
* @function populate
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const populate = async (parent, args, { assets }) => {
  console.log('Populating assets...');

  console.log('💾 Populating - Sexual Orientation list...');
  const sexOrientationList = SEX_ORIENTATION_LIST;
  const sexOrientationListResult = getMongoDoc(await assets.create({
    type: 'sex_orientation_list',
    data: { list: sexOrientationList },
  }));
  console.log('👍 DONE - Sexual Orientation list!');

  console.log('💾 Populating - Race list...');
  const raceList = RACE_LIST;
  const raceListResult = getMongoDoc(await assets.create({
    type: 'race_list',
    data: { list: raceList },
  }));
  console.log('👍 DONE - Race list!');

  console.log('💾 Populating - Gender list...');
  const genderList = GENDER_LIST;
  const genderListResult = getMongoDoc(await assets.create({
    type: 'gender_list',
    data: { list: genderList },
  }));
  console.log('👍 DONE - Gender list!');

  console.log('💾 Populating - Disability list...');
  const disabilityList = DISABILITY_LIST;
  const disabilityListResult = getMongoDoc(await assets.create({
    type: 'disability_list',
    data: { list: disabilityList },
  }));
  console.log('👍 DONE - Disability list!');

  console.log('💾 Populating - Job list...');
  const jobList = JOB_LIST;
  const jobListResult = getMongoDoc(await assets.create({
    type: 'job_list',
    data: { list: jobList },
  }));
  console.log('👍 DONE - Job list!');

  console.log('💾 Populating - Country list...');
  const countryList = COUNTRY_LIST;
  const countryListResult = getMongoDoc(await assets.create({
    type: 'country_list',
    data: { list: countryList },
  }));
  console.log('👍 DONE - Country list!');


  console.log('💾 Populating - BR state list...');
  const brStateList = BR_STATES_LIST;
  const brStateListResult = getMongoDoc(await assets.create({
    type: 'br_state_list',
    data: { list: brStateList },
  }));
  console.log('👍 DONE - BR state list!');

  console.log('💾 Populating - Interest zones list...');
  const interestZoneList = INTEREST_ZONE_LIST;
  const interestZoneListResult = getMongoDoc(await assets.create({
    type: 'interest_zone_list',
    data: { list: interestZoneList },
  }));
  console.log('👍 DONE - Interest zones list!');

  console.log('💾 Populating - Birth Sign list...');
  const birthSignList = BIRTH_SIGN_LIST;
  const birthSignListResult = getMongoDoc(await assets.create({
    type: 'birth_sign_list',
    data: { list: birthSignList },
  }));
  console.log('👍 DONE - Birth Sign list!');

  console.log('💾 Populating - Land Category list...');
  const landCategoryList = LAND_CATEGORY_LIST;
  const landCategoryListResult = getMongoDoc(await assets.create({
    type: 'land_category_list',
    data: { list: landCategoryList },
  }));
  console.log('👍 DONE - Land Category list!');

  console.log('💾 Populating - Place Category list...');
  const placeCategoryList = PLACE_CATEGORY_LIST;
  const placeCategoryListResult = getMongoDoc(await assets.create({
    type: 'place_category_list',
    data: { list: placeCategoryList },
  }));
  console.log('👍 DONE - Place Category list!');

  console.log('💾 Populating - Organization Category list...');
  const organizationCategoryList = ORGANIZATION_CATEGORY_LIST;
  const organizationCategoryListResult = getMongoDoc(await assets.create({
    type: 'organization_category_list',
    data: { list: organizationCategoryList },
  }));
  console.log('👍 DONE - Organization Category list!');

  console.log('💾 Populating - Organization Category list...');
  const opportunityCategoryList = OPPORTUNITY_CATEGORY_LIST;
  const opportunityCategoryListResult = getMongoDoc(await assets.create({
    type: 'opportunity_category_list',
    data: { list: opportunityCategoryList },
  }));
  console.log('👍 DONE - Organization Category list!');


  console.log('💾 Populating - Skills list...');
  const skillList = SKILL_LIST;
  const skillListResult = getMongoDoc(await assets.create({
    type: 'skill_list',
    data: { list: skillList },
  }));
  console.log('👍 DONE - Skills list!');


  console.log('💾 Populating - Languages list...');
  const languageList = LANGUAGE_LIST;
  const languageListResult = getMongoDoc(await assets.create({
    type: 'language_list',
    data: { list: languageList },
  }));
  console.log('👍 DONE - Languages list!');


  console.log('💾 Populating - Job Type list...');
  const jobTypeList = JOB_TYPE_LIST;
  const jobTypeListResult = getMongoDoc(await assets.create({
    type: 'job_type_list',
    data: { list: jobTypeList },
  }));
  console.log('👍 DONE - Job Type list!');

  console.log('💾 Populating - Work Experience list...');
  const workExperienceList = WORK_EXPERIENCE_LIST;
  const workExperienceListResult = getMongoDoc(await assets.create({
    type: 'work_experience_list',
    data: { list: workExperienceList },
  }));
  console.log('👍 DONE - Work Experience list!');

  console.log('💾 Populating - Education list...');
  const educationList = EDUCATION_LIST;
  const educationListResult = getMongoDoc(await assets.create({
    type: 'education_list',
    data: { list: educationList },
  }));
  console.log('👍 DONE - Education list!');

  console.log({
    sexOrientationListResult,
    raceListResult,
    genderListResult,
    disabilityListResult,
    jobListResult,
    countryListResult,
    brStateListResult,
    interestZoneListResult,
    birthSignListResult,
    landCategoryListResult,
    placeCategoryListResult,
    organizationCategoryListResult,
    opportunityCategoryListResult,
    skillListResult,
    languageListResult,
    jobTypeListResult,
    workExperienceListResult,
    educationListResult,
  });
  return [
    {
      ...sexOrientationListResult,
      id: sexOrientationListResult._id,
    },
    {
      ...raceListResult,
      id: raceListResult._id,
    },
    {
      ...genderListResult,
      id: genderListResult._id,
    },
    {
      ...disabilityListResult,
      id: disabilityListResult._id,
    },
    {
      ...jobListResult,
      id: jobListResult._id,
    },
    {
      ...countryListResult,
      id: countryListResult._id,
    },
    {
      ...brStateListResult,
      id: brStateListResult._id,
    },
    {
      ...interestZoneListResult,
      id: interestZoneListResult._id,
    },
    {
      ...birthSignListResult,
      id: birthSignListResult._id,
    },
    {
      ...landCategoryListResult,
      id: landCategoryListResult._id,

    },
    {
      ...placeCategoryListResult,
      id: placeCategoryListResult._id,
    },
    {
      ...organizationCategoryListResult,
      id: placeCategoryListResult._id,
    },
    {
      ...opportunityCategoryListResult,
      id: opportunityCategoryListResult._id,
    },
    {
      ...skillListResult,
      id: skillListResult._id,
    },
    {
      ...languageListResult,
      id: languageListResult._id,
    },
    {
      ...jobTypeListResult,
      id: jobTypeListResult._id,
    },
    {
      ...workExperienceListResult,
      id: workExperienceListResult._id,
    },
    {
      ...educationListResult,
      id: educationListResult._id,
    },
  ];
};

export default {
  create,
  findOne,
  findAll,
  update,
  populate,
};
