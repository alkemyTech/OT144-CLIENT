import {
  MEMBER_ADD,
  MEMBER_DELETE,
  MEMBER_GET,
  MEMBER_SET,
  MEMBER_UPDATE,
} from "../types/memberTypes";

export const setMemberActions = (member) => ({
  type: MEMBER_SET,
  payload: member,
});

export const getMemberActions = (member) => ({
  type: MEMBER_GET,
  payload: member,
});

export const addMemberActions = (member) => ({
  type: MEMBER_ADD,
  payload: member,
});

export const updateMemberActions = (member) => ({
  type: MEMBER_UPDATE,
  payload: member,
});

export const deleteMemberActions = (id) => ({
  type: MEMBER_DELETE,
  payload: id,
});
