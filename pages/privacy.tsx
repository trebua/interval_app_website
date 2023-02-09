export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
        }
      `}</style>
      <div
        style={{
          backgroundColor: "#FF9473",
          padding: "10%",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: 800,
            marginBottom: 0,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          09.02.2022
          <br />
          <br />
          Introduction: This privacy policy (“Policy”) explains how information
          about you is collected, used, and disclosed by [Insert App Name]
          (“App,” “we,” or “us”). This Policy applies to the App and all related
          services provided by us.
          <br />
          <br />
          Information We Collect: The App does not collect any personal
          information from you. However, the App Store and iOS may collect some
          information about your device and use for their own purposes, such as
          to improve their services and for analytics purposes.
          <br />
          <br />
          Information Use: We do not use any information collected through the
          App or through the App Store/iOS for any purpose. Information Sharing:
          We do not share any information collected through the App or through
          the App Store/iOS with any third parties.
          <br />
          <br />
          Security: The security of your information is important to us. We have
          implemented appropriate technical and organizational measures to
          protect your information from unauthorized access, use, disclosure, or
          destruction.
          <br />
          <br />
          Changes to This Policy: We may update this Policy from time to time.
          If we make any changes, we will notify you by revising the date at the
          top of this Policy and, in some cases, we may provide you with
          additional notice (such as adding a statement to our homepage or
          sending you a notification). Your continued use of the App after the
          revised Policy takes effect indicates that you have read, understood,
          and agreed to the current version of this Policy.
          <br />
          <br />
          Contact Us: If you have any questions about this Policy, please
          contact us at{" "}
          <a href="mailto:sindreaubert@gmail.com">sindreaubert@gmail</a>.
        </p>
      </div>
    </>
  );
}
