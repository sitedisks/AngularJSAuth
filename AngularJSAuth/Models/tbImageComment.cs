//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngularJSAuth.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbImageComment
    {
        public tbImageComment()
        {
            this.tbImageComment1 = new HashSet<tbImageComment>();
        }
    
        public long Id { get; set; }
        public Nullable<long> UserId { get; set; }
        public System.Guid ImageId { get; set; }
        public string Comment { get; set; }
        public long ParentCommentId { get; set; }
        public Nullable<System.DateTime> DateTime { get; set; }
        public bool isDeleted { get; set; }
    
        public virtual tbImage tbImage { get; set; }
        public virtual ICollection<tbImageComment> tbImageComment1 { get; set; }
        public virtual tbImageComment tbImageComment2 { get; set; }
        public virtual tbProfile tbProfile { get; set; }
    }
}
