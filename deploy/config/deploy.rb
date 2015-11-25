# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'hackfmi'
set :repo_url, 'git@github.com:HackSoftware/HackFMI.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/hack/hackfmi'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do
  desc 'Locally build the static site'

  task :build_static do
    run_locally do
      within '../' do
        execute :grunt, 'build --force'
      end
    end
  end

  desc 'Upload the static site'
  task :upload_static do
    on roles(:app) do
      upload! '../dist', release_path.join('dist'), recursive: true
    end
  end

  before :check, :build_static
  after :updated, :upload_static

end
