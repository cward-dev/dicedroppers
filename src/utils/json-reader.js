import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Card from "../../components/Card/Card.js";
import Grid from "../../components/Grid/Grid.js";
import "../pages.css";

function parseJson(filePath) {
  var data = require(`/content/${filePath}.json`);
  return data;
}

export default parseJson;