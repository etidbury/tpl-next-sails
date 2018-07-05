//@flow


import React from "react";
import { connect } from "react-redux";
import Client from "../lib/Client";
import axios from "axios";

class Blog extends React.Component<*> {
  timer = false;

  static async getInitialProps({ reduxStore, req, params }) {
    const isServer = !!req;

    let r = {};

    r = { ...(await Client.get("api/v1/versions").then(r => r.data)) };
    if (isServer && req.param) {
      const articleId = req.param("articleId");

      r = { articleId, ...r };

      //return {articleId,clientVersion,serverVersion}
    }

  
  axios.get
  

    return r;
  }

  render() {
    return (
      <div>
        Blog{" "}
        <div className="article-id">
          {this.props.articleId || "not specified"}
        </div>
        <br />
        Client Version: {this.props.clientVersion || "[n/a]"}
      </div>
    );
  }
}

export default connect()(Blog);
