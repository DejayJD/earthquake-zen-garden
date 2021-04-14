import React from "react";
import "./profile-view.scss";
import { Profile } from "../../types";

export const ProfileView = ({ profile }: { profile: Profile }) => (
  <div className="centered-wrapper">
    <h3> Profile </h3>
    <div className="profile-grid-container">
      <img
        src={profile.avatarImage}
        alt={`${profile.firstName} avatar image`}
      />
      <table className="profile-table">
        <tr>
          <td className="profile-table-left-column"> First name </td>
          <td> {profile.firstName}</td>
        </tr>
        <tr>
          <td className="profile-table-left-column"> Last name </td>
          <td> {profile.lastName}</td>
        </tr>
        <tr>
          <td className="profile-table-left-column"> Phone </td>
          <td> {profile.phone}</td>
        </tr>
        <tr>
          <td className="profile-table-left-column"> Email </td>
          <td> {profile.email}</td>
        </tr>
        <tr>
          <td className="profile-table-left-column"> Bio </td>
          <td> {profile.bio}</td>
        </tr>
      </table>
    </div>
  </div>
);
