﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Cattleision.Data
{
    public class CattelisionDbContext : IdentityDbContext<ApiUser>
    {
        public CattelisionDbContext(DbContextOptions<CattelisionDbContext> options) : base(options)
        {

        }
        public DbSet<Camera> Cameras { get; set; }
        public DbSet<AIOutput> AIOutputs { get; set; }
        public DbSet<Barnyard> Barnyards { get; set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        } 
        //protected 
    }
}
