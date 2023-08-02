from flask import Flask, send_from_directory
import os

def create_app():
    app = Flask(__name__)

    # Set the root directory where the React build files are located
    react_build_dir = os.path.join(os.path.dirname(__file__), '../public/build')

    # Define a route to serve the React app's entry point (index.html) using send_from_directory
    @app.route("/")
    def serve_static_index():
        return send_from_directory(react_build_dir, 'index.html')

    # Serve static files from the React build directory
    app.static_folder = os.path.join(react_build_dir, 'static')
    app.static_url_path = '/static'

    # ... Other routes and configurations ...

    return app